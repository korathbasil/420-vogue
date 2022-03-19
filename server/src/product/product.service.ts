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
}
