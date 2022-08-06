import {
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  BadRequestException,
} from '@nestjs/common';

import { AdminService } from './admin.service';
import { CreateAdminDto } from './dtos/create-admin.dto';

@Controller('/')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  async getAllAdmins() {
    return this.adminService.getAllAdmins();
  }

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
}
