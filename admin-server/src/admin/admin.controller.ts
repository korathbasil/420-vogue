import {
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  BadRequestException,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';

import { AdminService } from './admin.service';
import { CreateAdminDto } from './dtos/create-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  @UseGuards(AuthGuard)
  async getAllAdmins() {
    return this.adminService.getAllAdmins();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createAdmin(@Body() adminData: CreateAdminDto) {
    const admin = await this.adminService.createAdmin(adminData);

    if (!admin) throw new BadRequestException('User already exists');

    return admin;
  }

  @Post('super')
  @UsePipes(ValidationPipe)
  async createSuperAdmin(@Body() data: CreateAdminDto) {
    const user = await this.adminService.createSuperAdmin(data);

    if (!user) return new BadRequestException('User already exists');

    return user;
  }

  @Delete('/:id')
  deleteAdmin(@Param('id') id: string) {}
}
