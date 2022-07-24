import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { ProductsService, CreateProductDto } from 'common-server';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createProduct(@Body() body: CreateProductDto) {
    console.log(body);
  }
}
