import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Address } from "./address.model";

@Injectable()
export class AddressesRepository {
  constructor(
    @InjectModel("Address") private readonly addressModel: Model<Address>
  ) {}

  insertOne(address: Address) {
    const newAddress = new this.addressModel(address);
    return newAddress.save();
  }
}
