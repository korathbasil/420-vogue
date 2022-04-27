import { Injectable } from '@nestjs/common';

import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dtos/createUser.dto';
import { Role, User } from './user.model';
import { hashString } from '../util/crypto-hash';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  findAllUsers() {
    return this.usersRepo.find();
  }

  async createUser(data: CreateUserDto, role = 'USER' as Role) {
    const user = this.usersRepo.findOne({ email: data.email });

    if (user) return;

    const newUser = {
      ...data,
      role,
    } as User;

    newUser.password = await hashString(newUser.password);

    return this.usersRepo.insertOne(newUser);
  }
}
