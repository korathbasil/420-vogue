import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  BadRequestException,
  Param,
  NotFoundException,
} from '@nestjs/common';

import { ProductsService, CreateProductDto } from 'common-server';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get('/:id')
  async getProduct(@Param('id') id: string) {
    try {
      const product = await this.productsService.getProductWithId(id);
      return product;
    } catch (e) {
      throw new NotFoundException('Product not dound');
    }
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
