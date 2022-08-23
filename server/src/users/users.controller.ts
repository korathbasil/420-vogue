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
import { JwtService } from '@nestjs/jwt';
import { UsersService, CreateUserDto, User } from 'common-server';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
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

      const token = await this.jwtService.signAsync({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      });

      res.cookie('token', token, {
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
