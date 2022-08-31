import { Injectable } from '@nestjs/common';
import { CryptoService } from 'common-server';

import { CreateAdminDto } from './dtos/create-admin.dto';
import { AdminRepository } from './admin.repository';
import { Role } from './admin.model';

@Injectable()
export class AdminService {
  constructor(
    private readonly adminRepo: AdminRepository,
    private readonly cryptoServcie: CryptoService,
  ) {}
  getAllAdmins() {
    // return this.usersService.findAllAdmins();
    return [];
  }
  async createAdmin(data: CreateAdminDto) {
    const admin = await this.adminRepo.findOne({ email: data.email });
    if (admin) return;

    data.password = await this.cryptoServcie.hashString(data.password);
    return this.adminRepo.insertOne({ ...data, role: Role.MANAGER });
  }
  async createSuperAdmin(data: CreateAdminDto) {
    let admin = await this.adminRepo.findOne({ role: Role.SUPERADMIN });
    if (admin) return;

    admin = await this.adminRepo.findOne({ email: data.email });
    if (admin) return;

    data.password = await this.cryptoServcie.hashString(data.password);
    return this.adminRepo.insertOne({ ...data, role: Role.MANAGER });
  }
}
