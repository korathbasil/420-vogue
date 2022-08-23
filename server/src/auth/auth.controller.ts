import {
  Body,
  Controller,
  Post,
  Res,
  UnauthorizedException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UsersService } from 'common-server';
import { Response } from 'express';

import { LoginUserDto } from './dtos/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  @UsePipes(ValidationPipe)
  @Post()
  async login(
    @Res({ passthrough: true }) res: Response,
    @Body() cred: LoginUserDto,
  ) {
    try {
      const user = await this.usersService.loginUser(cred.email, cred.password);

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
      return new UnauthorizedException();
    }
  }
}
