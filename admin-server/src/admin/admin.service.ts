import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateAdminDto } from './dtos/create-admin.dto';
import { UsersService, UsersRepository, Role } from 'common-server';

@Injectable()
export class AdminService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly usersService: UsersService,
  ) {}

  getAllAdmins() {
    return this.usersRepository.find({ role: 'MANAGER' });
  }

  createAdmin(data: CreateAdminDto) {
    return this.usersService.createUser(data, Role.MANAGER);
  }

  createSuperUser(data: CreateAdminDto) {
    return this.usersService.createUser(data, Role.SUPERUSER);
  }
}
