import { Injectable } from '@nestjs/common';

import { CreateAdminDto } from './dtos/create-admin.dto';
import { AdminRepository } from './admin.repository';
import { Role } from './admin.model';

@Injectable()
export class AdminService {
  constructor(private readonly adminRepo: AdminRepository) {}
  getAllAdmins() {
    // return this.usersService.findAllAdmins();
    return [];
  }
  createAdmin(data: CreateAdminDto) {
    return this.adminRepo.insertOne({ ...data, role: Role.MANAGER });
  }
  createSuperUser(data: CreateAdminDto) {
    // return this.usersService.createUser(data, Role.SUPERUSER);
    return false;
  }
}
