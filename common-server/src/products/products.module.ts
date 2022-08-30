import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { productSchema } from "./products.model";
import { productVariantSchema } from "./product-variants.model";
import { ProductsRepository } from "./products.repository";
import { ProductsService } from "./products.service";
import { ProductVariantsRepository } from "./product-variants.repository";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Product", schema: productSchema },
      { name: "ProductVariant", schema: productVariantSchema },
    ]),
  ],
  controllers: [],
  providers: [ProductsService, ProductsRepository, ProductVariantsRepository],
  exports: [ProductsService],
})
export class ProductsModule {}
