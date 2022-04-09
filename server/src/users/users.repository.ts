import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  find() {
    return this.userModel.find();
  }

  insertOne(user: User) {
    const newUser = new this.userModel(user);

    return newUser.save();
  }
}
