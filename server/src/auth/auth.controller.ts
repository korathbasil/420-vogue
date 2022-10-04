import { Response } from 'express';
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

  // @UseGuards(AuthGuard)
  // @UseSerializeInterceptor(UserDto)
  // @Get('/current-user')
  // async getCurrentUser(
  //   @Res({ passthrough: true }) res: Response,
  //   @Req() req: Request,
  // ) {
  //   // @ts-ignore
  //   const token = req.cookies['token'];
  //   // @ts-ignore

  //   if (!token) throw new UnauthorizedException('Please login to continue');

  //   type JwtPayload = {
  //     _id: string;
  //     firstname: string;
  //     lastname: string;
  //     email: string;
  //   };

  //   try {
  //     const userData: JwtPayload = await this.jwtService.verifyAsync(token, {
  //       secret: 'secret',
  //     });
  //     const loggedInUser = await this.authService.getLoggedInUser(userData._id);
  //     (
  //       loggedInUser as User & {
  //         token: string;
  //       }
  //     ).token = token;
  //     res.cookie('token', token, {
  //       httpOnly: true,
  //     });
  //     return loggedInUser;
  //   } catch (e) {
  //     throw new UnauthorizedException('Please login to continue');
  //   }
  // }

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
