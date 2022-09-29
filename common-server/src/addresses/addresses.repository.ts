import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, UpdateQuery } from "mongoose";
import { Address, AddressDoc } from "./address.model";

@Injectable()
export class AddressesRepository {
  constructor(
    @InjectModel("Address") private readonly addressModel: Model<AddressDoc>
  ) {}

  insertOne(address: Address) {
    const newAddress = new this.addressModel(address);
    return newAddress.save();
  }

  updateOne(id: string, query: UpdateQuery<Address>) {
    return this.addressModel.updateOne({ _id: id }, query);
  }

  deleteOne(id: string) {
    return this.addressModel.deleteOne({ _id: id });
  }
}
