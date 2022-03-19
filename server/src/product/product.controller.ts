import { Controller, Get, Post } from '@nestjs/common';

import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('product')
export class ProductController {
  constructor(private readonly producttService: ProductService) {}

  @Get()
  getProducts(): Promise<Product[]> {
    return this.producttService.getAllProducts();
  }

  @Post()
  async createProduct(): Promise<Product> {
    return this.producttService.createProduct();
  }
}
