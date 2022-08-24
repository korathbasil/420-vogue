import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";

import { UsersRepository } from "./users.repository";
import { CreateUserDto } from "./dtos/create-user.dto";
import { Role, User } from "./user.model";
import { hashString, compareHash } from "../util/crypto-hash";
import { Types } from "mongoose";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  findAllUsers() {
    return this.usersRepo.find({ role: Role.USER });
  }

  findAllAdmins() {
    return this.usersRepo.find({ role: Role.MANAGER });
  }

  getUserById(id: string) {
    return this.usersRepo.findOne({ id: new Types.ObjectId(id) });
  }

  async createUser(data: CreateUserDto, role = Role.USER) {
    const user = await this.usersRepo.findOne({ email: data.email });

    if (user) return;

    const newUser = {
      ...data,
      role,
    } as unknown as User;

    newUser.password = await hashString(newUser.password);

    return this.usersRepo.insertOne(newUser);
  }

  async loginUser(email: string, password: string): Promise<User> {
    const user = await this.usersRepo.findOne({ email });

    if (!user) throw new NotFoundException("User not found");

    const doesPassworddsMatch = await compareHash(user.password, password);

    if (!doesPassworddsMatch)
      throw new UnauthorizedException("Incorrect password");

    return user;
  }
}
