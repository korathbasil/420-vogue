import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';

import { ProductsService, Product } from 'common-server';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }

  @Get('/:id')
  async getProductWithId(@Param('id') id: string): Promise<Product> {
    try {
      const product = await this.productService.getProductWithId(id);
      return product;
    } catch (e) {
      throw new NotFoundException('Product not dound');
    }
  }

  @Get('/?category')
  async getProductsWithCategory(
    @Query('category') cat: string,
  ): Promise<Product[]> {
    try {
      const product = await this.productService.getProductsWithCategory(cat);
      return product;
    } catch (e) {
      throw new NotFoundException('Product not dound');
    }
  }
}
