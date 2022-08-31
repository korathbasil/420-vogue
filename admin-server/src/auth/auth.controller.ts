import {
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginAdminDto } from './dtos/login-admin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async loginAdmin(@Body() data: LoginAdminDto) {
    try {
      const admin = await this.authService.loginAdmin(
        data.email,
        data.password,
      );
      return admin;
    } catch (error) {
      throw error;
    }
  }

  @Post()
  logoutAdmin() {}
}
