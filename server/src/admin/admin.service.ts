import { Injectable } from '@nestjs/common';
import { Role, User } from '../users/user.model';

import { UsersService } from '../users/users.service';
import { CreateAdminDto } from './dtos/create-admin.dto';

@Injectable()
export class AdminService {
  constructor(private readonly userService: UsersService) {}

  createAdmin(data: CreateAdminDto) {
    return this.userService.createUser(data, Role.MANAGER);
  }
}
