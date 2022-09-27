import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery, Types, UpdateQuery } from 'mongoose';

import { AdminDocument, Admin, Role } from './admin.model';

@Injectable()
export class AdminRepository {
  constructor(
    @InjectModel('Admin') private readonly adminModel: Model<AdminDocument>,
  ) {}

  find(query?: FilterQuery<Admin>) {
    return this.adminModel.find(query);
  }

  findOne(query: FilterQuery<Admin>) {
    return this.adminModel.findOne(query);
  }

  findById(id: string) {
    return this.adminModel.findById(id).exec();
  }

  async insertOne(admin: Admin) {
    const newAdmin = new this.adminModel(admin);
    const res = await newAdmin.save();
    return res;
  }

  updateOne(filter: FilterQuery<Admin>, update: UpdateQuery<Admin>) {
    return this.adminModel.updateOne(filter, update);
  }
}
