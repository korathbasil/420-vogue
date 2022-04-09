import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dtos/createUser.dto';
import { UsersRepository } from './users.repository';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  createUser(data: CreateUserDto) {
    const user = {
      ...data,
    } as User;
    return this.usersRepo.insertOne(user);
  }
}
