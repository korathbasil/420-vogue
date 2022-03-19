import { Injectable } from '@nestjs/common';

import { ProductRepository } from './product.repository';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(private readonly productRepo: ProductRepository) {}

  async getAllProducts(): Promise<Product[]> {
    const products = await this.productRepo.find({});

    return products;
  }

  async createProduct(): Promise<Product> {
    return this.productRepo.insertOne({
      id: 'jnfjihaiha',
      name: 'Shirt',
      price: 3.45,
    });
  }
}
