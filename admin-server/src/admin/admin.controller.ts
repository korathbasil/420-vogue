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
  Put,
  Req,
  Patch,
} from '@nestjs/common';
import { Request } from 'express';

import { AuthGuard } from 'src/guards/auth.guard';
import { SuperAuthGuard } from 'src/guards/super-auth.guard';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dtos/create-admin.dto';
import { UpdateAdminDto } from './dtos/update-admin-dto';
import { UpdatePasswordDto } from './dtos/update-password.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  @UseGuards(AuthGuard)
  async getAllAdmins() {
    return this.adminService.getAllAdmins();
  }

  @Get('/:id')
  @UseGuards(AuthGuard)
  async getAdminById(@Param('id') id: string) {
    try {
      const admin = await this.adminService.getAdminById(id);
      return admin;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Post()
  @UseGuards(SuperAuthGuard)
  @UseGuards(AuthGuard)
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

  @Patch('/:id')
  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  async update(@Param('id') id: string, @Body() data: UpdateAdminDto) {
    if (!data.firstname && !data.lastname && !data.phone)
      throw new BadRequestException();

    try {
      const fields = await this.adminService.updateAdmin(id, data);
      return fields;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Put('password')
  @UseGuards(AuthGuard)
  async updatePassword(@Req() req: Request, @Body() data: UpdatePasswordDto) {
    try {
      await this.adminService.updatePassword(
        req.admin._id,
        data.oldPassword,
        data.newPassword,
      );

      return;
    } catch (error) {
      throw error;
    }
  }

  @Delete('/:id')
  @UseGuards(AuthGuard)
  deleteAdmin(@Param('id') id: string) {}
}
