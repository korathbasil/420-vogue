import { Injectable } from '@nestjs/common';

import { ProductsRepository } from './products.repository';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepo: ProductsRepository) {}

  async getAllProducts(): Promise<Product[]> {
    const products = await this.productRepo.find({});

    return products;
  }

  async createProduct(): Promise<Product> {
    return;
  }
}
