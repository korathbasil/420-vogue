import { Controller, Get, Post } from '@nestjs/common';

import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }

  @Post()
  async createProduct(): Promise<Product> {
    return this.productService.createProduct();
  }
}
