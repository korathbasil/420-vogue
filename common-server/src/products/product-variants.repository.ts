import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, FilterQuery, Types } from "mongoose";

import {
  ProductVariant,
  ProductVariantDocument,
} from "./product-variants.model";

@Injectable()
export class ProductVariantsRepository {
  constructor(
    @InjectModel("ProductVariant")
    private readonly variantModel: Model<ProductVariantDocument>
  ) {}

  async find(
    productsFilterQuery: FilterQuery<ProductVariant>
  ): Promise<ProductVariant[]> {
    return this.variantModel.find(productsFilterQuery);
  }

  async findById(id: string): Promise<ProductVariant> {
    return this.variantModel.findById(id);
  }
  async findOne(
    productsFilterQuery: FilterQuery<ProductVariant>
  ): Promise<ProductVariant> {
    return this.variantModel.findOne(productsFilterQuery);
  }

  async insertOne(variant: ProductVariant) {
    const newProduct = new this.variantModel(variant);

    return newProduct.save();
  }

  async insertMany(variants: ProductVariant[]): Promise<Types.ObjectId[]> {
    const res = await this.variantModel.insertMany(variants);
    const ids = res.map((v) => v._id);

    return ids;
  }
}
