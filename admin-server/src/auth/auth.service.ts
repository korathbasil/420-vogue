import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from 'common-server';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}
  async loginAdmin(email: string, password: string) {
    try {
      const user = await this.usersService.loginUser(email, password);
      return user;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
