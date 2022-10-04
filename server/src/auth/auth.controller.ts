import { Request, Response } from 'express';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { User, UserDto, UseSerializeInterceptor } from 'common-server';

import { LoginUserDto } from './dtos/login-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  @UseGuards(AuthGuard)
  async getCurrentUser(@Req() req: Request) {
    const admin = req.user;
    return admin;
  }

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

  // Google OAuth
  @Get('/google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req: Request) {
    console.log('Hit');
  }

  @Get('/google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return req?.user;
  }
}
