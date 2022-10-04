import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  BadRequestException,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { UsersService, CreateUserDto, User } from 'common-server';

import { AuthTokenService } from 'src/auth-token/auth-token.service';

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
}
