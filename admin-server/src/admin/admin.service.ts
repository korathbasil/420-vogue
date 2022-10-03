import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
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
    return this.adminRepo.find();
  }

  getAdminById(id: string) {
    return this.adminRepo.findById(id);
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

  async adminLogin(email: string, password: string) {
    const admin = await this.adminRepo.findOne({ email });

    if (!admin) throw new UnauthorizedException('Invalid credentials');

    const doesPasswordsMatch = await this.cryptoServcie.compareHash(
      admin.password,
      password,
    );

    if (!doesPasswordsMatch)
      throw new UnauthorizedException('Invalid credentials');
    return admin;
  }

  async updatePassword(
    userId: string,
    oldPassword: string,
    newPassword: string,
  ) {
    const user = await this.adminRepo.findById(userId);
    if (!user) throw new NotFoundException();

    const isOldPasswordCorrect = await this.cryptoServcie.compareHash(
      user.password,
      oldPassword,
    );

    if (!isOldPasswordCorrect) throw new UnauthorizedException();

    const newHashedPassword = await this.cryptoServcie.hashString(newPassword);

    return this.adminRepo.updateOne(
      { _id: userId },
      {
        $set: { password: newHashedPassword },
      },
    );
  }

  async updateAdmin(
    id: string,
    obj: {
      firstname?: string;
      lastname?: string;
      phone?: string;
    },
  ) {
    const res = await this.adminRepo.updateOne(
      { _id: id },
      {
        $set: obj,
      },
    );

    return Object.keys(obj);
  }
}
