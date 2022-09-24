import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { AddressesService } from "./addresses.service";
import { addressSchema } from "./address.model";
import { AddressesRepository } from "./addresses.repository";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Address", schema: addressSchema }]),
  ],
  providers: [AddressesService, AddressesRepository],
  exports: [AddressesService],
})
export class AddressesModule {}
