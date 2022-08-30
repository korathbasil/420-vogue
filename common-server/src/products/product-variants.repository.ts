import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, FilterQuery } from "mongoose";

import { ProductVariant } from "./product-variants.model";

@Injectable()
export class ProductVariantsRepository {
  constructor(
    @InjectModel("ProductVariant")
    private readonly variantModel: Model<ProductVariant>
  ) {}

  async find(
    productsFilterQuery: FilterQuery<ProductVariant>
  ): Promise<ProductVariant[]> {
    return this.variantModel.find(productsFilterQuery);
  }

  async findOne(
    productsFilterQuery: FilterQuery<ProductVariant>
  ): Promise<ProductVariant> {
    return this.variantModel.findOne(productsFilterQuery);
  }

  async findById(id: string): Promise<ProductVariant> {
    return this.variantModel.findById(id);
  }

  async insertOne(variant: ProductVariant): Promise<ProductVariant> {
    const newProduct = new this.variantModel(variant);

    return newProduct.save();
  }
}
