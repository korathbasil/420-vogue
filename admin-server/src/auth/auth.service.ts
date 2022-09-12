import { Injectable, BadRequestException } from '@nestjs/common';

import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class AuthService {
  constructor(private readonly adminService: AdminService) {}

  getAdminById(id: string) {
    return this.adminService.getAdminById(id);
  }

  loginAdmin(email: string, password: string) {
    return this.adminService.adminLogin(email, password);
  }
}
