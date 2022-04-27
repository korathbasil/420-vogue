import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { AdminService } from './admin.service';
import { CreateAdminDto } from './dtos/create-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createAdmin(@Body() adminData: CreateAdminDto) {
    return this.adminService.createAdmin(adminData);
  }
}
