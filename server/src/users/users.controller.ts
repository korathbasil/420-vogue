import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { UsersService } from './users.service';
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
  createUser(@Body() userData: CreateUserDto) {
    return this.usersService.createUser(userData);
  }
}
