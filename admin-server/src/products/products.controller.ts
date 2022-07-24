import { Controller, Get, Post } from '@nestjs/common';

import { ProductsService } from 'common-server';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Post()
  createProduct() {}
}
