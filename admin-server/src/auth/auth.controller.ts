import {
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  Req,
  Res,
  Get,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { AuthTokenService } from 'src/auth-token/auth-token.service';
import { AuthService } from './auth.service';
import { LoginAdminDto } from './dtos/login-admin.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly authTokenServcie: AuthTokenService,
  ) {}

  @Get()
  async getCurrentUser(@Req() req: Request) {
    const token = req.cookies['access-token'];

    if (!token) throw new UnauthorizedException();

    const { _id } = await this.authTokenServcie.verify(token);

    const admin = await this.authService.getAdminById(_id);

    if (!admin) throw new UnauthorizedException();

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

      const { _id, firstname, lastname, email } = admin;

      const token = await this.authTokenServcie.sign({
        _id,
        firstname,
        lastname,
        email,
      });

      res.cookie('access-token', token, {
        httpOnly: true,
      });

      return admin;
    } catch (error) {
      throw error;
    }
  }

  @Post()
  logoutAdmin() {}
}
