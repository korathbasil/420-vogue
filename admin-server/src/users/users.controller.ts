import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  BadRequestException,
} from '@nestjs/common';

import { UsersService } from 'common-server';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createUser(@Body() userData: CreateUserDto) {
    const user = await this.usersService.createUser(userData);

    if (!user) return new BadRequestException('User already exists');

    return user;
  }
}
