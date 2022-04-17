import { Body, Controller, Post } from '@nestjs/common';

import { CreateAdminDto } from './dtos/create-admin.dto';

@Controller('admin')
export class AdminController {
  @Post()
  createAdmin(@Body() adminData: CreateAdminDto) {}
}
