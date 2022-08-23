import { Injectable } from '@nestjs/common';
import { UsersService } from 'common-server';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async loginUser(email: string, password: string) {
    try {
      return this.usersService.loginUser(email, password);
    } catch (e) {
      throw e;
    }
  }
}
