import { Injectable } from '@nestjs/common';

import { CreateAdminDto } from './dtos/create-admin.dto';
import { Role } from '../users/user.model';
import { UsersService } from '../users/users.service';

@Injectable()
export class AdminService {
  constructor(private readonly userService: UsersService) {}

  createAdmin(data: CreateAdminDto) {
    return this.userService.createUser(data, Role.MANAGER);
  }

  createSuperUser(data: CreateAdminDto) {
    return this.userService.createUser(data, Role.SUPERUSER);
  }
}
