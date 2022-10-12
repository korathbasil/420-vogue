import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {
  Model,
  FilterQuery,
  Types,
  UpdateQuery,
  PipelineStage,
} from "mongoose";

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
    return this.userModel.findById(id).populate("addresses").exec();
  }

  async insertOne(user: User) {
    const newUser = new this.userModel(user);
    const res = await newUser.save();
    return res;
  }

  updateOne(id: string, query: UpdateQuery<User>) {
    return this.userModel.updateOne({ _id: new Types.ObjectId(id) }, query);
  }

  aggregate(stages: PipelineStage[]) {
    return this.userModel.aggregate(stages);
  }
}
