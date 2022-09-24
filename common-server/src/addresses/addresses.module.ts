import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { AddressesService } from "./addresses.service";
import { addressSchema } from "./address.model";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Address", schema: addressSchema }]),
  ],
  providers: [AddressesService],
  exports: [AddressesService],
})
export class AddressesModule {}
