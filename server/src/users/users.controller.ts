import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  BadRequestException,
  Res,
  UseGuards,
  Req,
  InternalServerErrorException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import {
  UsersService,
  CreateUserDto,
  User,
  CreateAddressDto,
} from 'common-server';

import { AuthTokenService } from 'src/auth-token/auth-token.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { userSchema } from 'common-server/dist/users/user.model';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authTokenService: AuthTokenService,
  ) {}

  @Get()
  getAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createUser(
    @Body() userData: CreateUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const user = await this.usersService.createUser(userData);
      if (!user) return new BadRequestException('User already exists');

      const token = await this.authTokenService.sign({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      });

      res.cookie('access-token', token, {
        httpOnly: true,
        maxAge: 259200,
      });

      delete user.password;

      (
        user as User & {
          token: string;
        }
      ).token = token;

      return user;
    } catch (e) {
      return e;
    }
  }

  @Get('/addresses')
  @UseGuards(AuthGuard)
  addresses(@Req() req: Request) {
    const userId = req.authUser._id;
    try {
      const addresses = this.usersService.getAddressesForUser(userId);
      return addresses;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Post('/addresses')
  @UseGuards(AuthGuard)
  async newAddress(@Req() req: Request, @Body() data: CreateAddressDto) {
    const id = req.authUser._id;
    try {
      await this.usersService.addAddress(id, data);
      return;
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
