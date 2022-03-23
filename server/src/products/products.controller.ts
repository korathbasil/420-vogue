import { Controller, Get, Post } from '@nestjs/common';

import { Product } from './products.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }

  @Post()
  async createProduct(): Promise<Product> {
    return this.productService.createProduct();
  }
}
