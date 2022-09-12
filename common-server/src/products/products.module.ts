import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { productSchema } from "./products.model";
import { productVariantSchema } from "./product-variants.model";
import { ProductsRepository } from "./products.repository";
import { ProductsService } from "./products.service";
import { ProductVariantsRepository } from "./product-variants.repository";
import { StorageModule } from "../storage/storage.module";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Product", schema: productSchema },
      { name: "ProductVariant", schema: productVariantSchema },
    ]),
    StorageModule,
  ],
  controllers: [],
  providers: [ProductsService, ProductsRepository, ProductVariantsRepository],
  exports: [ProductsService],
})
export class ProductsModule {}
