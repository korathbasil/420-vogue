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

  @Post('login')
  @UsePipes(ValidationPipe)
  async loginAdmin(@Body() data: LoginAdminDto) {
    return this.authService.loginAdmin(data.email, data.password);
  }

  @Post()
  logoutAdmin() {}
}
