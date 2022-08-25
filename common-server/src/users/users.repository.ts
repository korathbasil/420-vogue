import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, FilterQuery, Types } from "mongoose";

import { User } from "./user.model";

@Injectable()
export class UsersRepository {
  constructor(@InjectModel("User") private readonly userModel: Model<User>) {}

  find(query?: FilterQuery<User>) {
    return this.userModel.find(query);
  }

  findOne(query: FilterQuery<User>) {
    return this.userModel.findOne(query);
  }

  async findById(id: string) {
    return this.userModel.findOne({ id: new Types.ObjectId(id) });
    // return this.userModel.findById(id).exec();
  }

  insertOne(user: User) {
    const newUser = new this.userModel(user);

    return newUser.save();
  }
}
