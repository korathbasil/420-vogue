import { Request, Response } from 'express';
import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard as OAuthGuard } from '@nestjs/passport';
import { User } from 'common-server';

import { AuthTokenService } from 'src/auth-token/auth-token.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { LoginUserDto } from './dtos/login-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly authTokenService: AuthTokenService,
  ) {}

  @Get()
  @UseGuards(AuthGuard)
  async getCurrentUser(@Req() req: Request) {
    const user = req.authUser;
    return user;
  }

  @UsePipes(ValidationPipe)
  @Post('/login')
  async login(
    @Res({ passthrough: true }) res: Response,
    @Body() cred: LoginUserDto,
  ) {
    try {
      const user = await this.authService.loginUser(cred.email, cred.password);

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
  @UseGuards(OAuthGuard('google'))
  async googleAuth(@Req() req: Request) {}

  @Get('/google/callback')
  @UseGuards(OAuthGuard('google'))
  googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    console.log(req.user);
    return res.redirect('http://localhost:3000');
  }
}
