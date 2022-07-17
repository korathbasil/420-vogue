import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateAdminDto } from './dtos/create-admin.dto';
import { Role } from '../users/user.model';
import { UsersService } from '../users/users.service';
import { UsersRepository } from 'src/users/users.repository';

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

  async loginAdmin(email: string, password: string) {
    try {
      const user = await this.usersService.loginUser(email, password);
      return user;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
