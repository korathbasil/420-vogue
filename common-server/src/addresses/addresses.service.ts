import { Injectable } from "@nestjs/common";
import { Address } from "./address.model";
import { AddressesRepository } from "./addresses.repository";
import { CreateAddressDto } from "./dtos/create-address.dto";

@Injectable()
export class AddressesService {
  constructor(private readonly repo: AddressesRepository) {}

  getAddresses(userId: string) {
    return this.repo.find({});
  }

  addAddress(addressData: CreateAddressDto) {
    const address = {
      ...addressData,
      country: "INDIA (IN)",
    } as Address;

    return this.repo.insertOne(address);
  }

  editAddress() {}

  deleteAddress(id: string) {
    return this.repo.deleteOne(id);
  }
}
