import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, FilterQuery, UpdateQuery } from "mongoose";

import { Product, ProductDocument } from "./products.model";

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectModel("Product")
    private readonly productModel: Model<ProductDocument>
  ) {}

  async find(productsFilterQuery: FilterQuery<Product>): Promise<Product[]> {
    return this.productModel.find(productsFilterQuery);
  }

  async findOne(productsFilterQuery: FilterQuery<Product>): Promise<Product> {
    return this.productModel.findOne(productsFilterQuery);
  }

  async findById(id: string): Promise<Product> {
    return this.productModel.findById(id);
  }

  async insertOne(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  async updateOne(
    filterQuery: FilterQuery<Product>,
    updateQuery: UpdateQuery<Product>
  ) {
    return this.productModel.updateOne(filterQuery, updateQuery);
  }
}
