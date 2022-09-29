import {
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  Req,
  Res,
  Get,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { AuthTokenService } from 'src/auth-token/auth-token.service';
import { AuthService } from './auth.service';
import { LoginAdminDto } from './dtos/login-admin.dto';
import { AuthGuard } from '../guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly authTokenServcie: AuthTokenService,
  ) {}

  @Get()
  @UseGuards(AuthGuard)
  async getCurrentUser(@Req() req: Request) {
    const admin = req.admin;
    return admin;
  }

  @Post()
  @UsePipes(ValidationPipe)
  async loginAdmin(
    @Body() data: LoginAdminDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const admin = await this.authService.loginAdmin(
        data.email,
        data.password,
      );

      const { _id, firstname, lastname, email, role } = admin;

      const token = await this.authTokenServcie.sign({
        _id,
        firstname,
        lastname,
        email,
        role,
      });

      res.cookie('access-token', token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 3 - 200,
      });

      return admin;
    } catch (error) {
      throw error;
    }
  }

  @Post('logout')
  @UseGuards(AuthGuard)
  logoutAdmin(@Res({ passthrough: true }) res: Response) {
    res.cookie('access-token', '__unauthorozed__', {
      httpOnly: true,
      maxAge: 0,
    });
    return {
      status: 200,
      statusText: '200 OK',
    };
  }
}
