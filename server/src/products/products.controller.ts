import { Controller, Get, Post } from '@nestjs/common';

import { ProductsService, Product } from 'common-server';

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
