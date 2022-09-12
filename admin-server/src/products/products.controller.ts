import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  BadRequestException,
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
  async createProduct(@Body() body: CreateProductDto) {
    try {
      const product = await this.productsService.createProduct(body);
      return product;
    } catch (e) {
      throw new BadRequestException();
    }
  }
}
