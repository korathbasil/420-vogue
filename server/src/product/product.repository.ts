import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';

import { ProductDoc } from './product.model';
import { Product } from './product.model';

@Injectable()
export class ProductRepository {
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
