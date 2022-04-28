import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateAdminDto } from './dtos/create-admin.dto';
import { Role } from '../users/user.model';
import { UsersService } from '../users/users.service';

@Injectable()
export class AdminService {
  constructor(private readonly usersService: UsersService) {}

  createAdmin(data: CreateAdminDto) {
    return this.usersService.createUser(data, Role.MANAGER);
  }

  createSuperUser(data: CreateAdminDto) {
    return this.usersService.createUser(data, Role.SUPERUSER);
  }

  async loginAdmin(email: string, password: string) {
    try {
      const user = await this.usersService.loginUser(email, password);
      return user;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
