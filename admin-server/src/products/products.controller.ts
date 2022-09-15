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
import {
  ProductsService,
  CreateProductDto,
  CreateVariantDto,
} from 'common-server';
import { ObjectId } from 'mongoose';

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

  @Post('/:id/variants')
  @UsePipes(ValidationPipe)
  async addVariant(
    @Param('id') productId: string,
    @Body() data: CreateVariantDto,
  ): Promise<any> {
    try {
      const id = await this.productsService.createVariant(
        productId,
        data.color,
        data.colorCode,
        data.images,
        data.price,
      );

      return id;
    } catch (e) {
      throw new BadRequestException();
    }
  }
}
