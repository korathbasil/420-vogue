import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  BadRequestException,
} from '@nestjs/common';
import { UsersService, CreateUserDto } from 'common-server';

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
    console.log(23123);

    if (!user) return new BadRequestException('User already exists');

    return user;
  }
}
