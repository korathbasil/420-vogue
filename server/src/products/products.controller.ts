import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { ProductsService, Product, CreateProductDto } from 'common-server';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getProducts(
    @Query('qs') query: string,
    @Query('c') category: string,
    @Query('sc') subCategory: string,
  ): Promise<Product[]> {
    if (!query && !category && !subCategory)
      return this.productService.getAllProducts();
    if (query && !category && !subCategory)
      return this.productService.getProductsWitQuery(query);

    if (subCategory && !category)
      return this.productService.getProductsBySubCategory(subCategory);
    return this.productService.getProductsByCategory(category);
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

  // @Get('/?category')
  // async getProductsWithCategory(
  //   @Query('category') cat: string,
  // ): Promise<Product[]> {
  //   try {
  //     const product = await this.productService.getProductsWithCategory(cat);
  //     return product;
  //   } catch (e) {
  //     throw new NotFoundException('Product not dound');
  //   }
  // }

  @Post()
  @UsePipes(ValidationPipe)
  async createProduct(@Body() productData: CreateProductDto) {
    return this.productService.createProduct(productData);
  }
}
