import { Injectable } from '@nestjs/common';

import { CreateAdminDto } from './dtos/create-admin.dto';
import { UsersService, Role } from 'common-server';

@Injectable()
export class AdminService {
  // constructor(private readonly usersService: UsersService) {}
  getAllAdmins() {
    // return this.usersService.findAllAdmins();
    return [];
  }
  createAdmin(data: CreateAdminDto) {
    // return this.usersService.createUser(data, Role.MANAGER);
    return false;
  }
  createSuperUser(data: CreateAdminDto) {
    // return this.usersService.createUser(data, Role.SUPERUSER);
    return false;
  }
}
