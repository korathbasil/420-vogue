import {
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  BadRequestException,
} from '@nestjs/common';

import { AdminService } from './admin.service';
import { CreateAdminDto } from './dtos/create-admin.dto';
import { LoginAdminDto } from './dtos/login-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createAdmin(@Body() adminData: CreateAdminDto) {
    const admin = await this.adminService.createAdmin(adminData);

    if (!admin) return new BadRequestException('User already exists');

    return admin;
  }

  @Post('super')
  @UsePipes(ValidationPipe)
  async createSuperUser(@Body() data: CreateAdminDto) {
    const user = await this.adminService.createAdmin(data);

    if (!user) return new BadRequestException('User already exists');

    return user;
  }

  @Post('login')
  @UsePipes(ValidationPipe)
  async loginAdmin(@Body() data: LoginAdminDto) {
    return this.adminService.loginAdmin(data.email, data.password);
  }
}
