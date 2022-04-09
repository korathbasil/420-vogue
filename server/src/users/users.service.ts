import { Injectable } from '@nestjs/common';

import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './user.model';
import { hashString } from '../util/crypto-hash';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  findAllUsers() {
    return this.usersRepo.find();
  }

  async createUser(data: CreateUserDto) {
    const user = {
      ...data,
    } as User;

    user.password = await hashString(user.password);

    return this.usersRepo.insertOne(user);
  }
}
