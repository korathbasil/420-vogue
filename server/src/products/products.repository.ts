import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';

import { ProductDoc } from './products.model';
import { Product } from './products.model';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<ProductDoc>,
  ) {}

  async find(productsFilterQuery: FilterQuery<Product>): Promise<Product[]> {
    return this.productModel.find(productsFilterQuery);
  }

  async insertOne(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);

    return newProduct.save();
  }
}