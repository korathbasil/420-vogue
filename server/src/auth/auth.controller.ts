import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  Res,
  UnauthorizedException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'common-server';
import { Response } from 'express';

import { LoginUserDto } from './dtos/login-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
  ) {}

  @UsePipes(ValidationPipe)
  @Post('/login')
  async login(
    @Res({ passthrough: true }) res: Response,
    @Body() cred: LoginUserDto,
  ) {
    try {
      const user = await this.authService.loginUser(cred.email, cred.password);

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
      throw new UnauthorizedException(e.message);
    }
  }
}
