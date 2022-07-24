import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { productSchema } from "./products.model";
import { ProductsRepository } from "./products.repository";
import { ProductsService } from "./products.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Product", schema: productSchema }]),
  ],
  controllers: [],
  providers: [ProductsService, ProductsRepository],
})
export class ProductsModule {}
