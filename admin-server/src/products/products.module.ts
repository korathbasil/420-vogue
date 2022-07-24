import { Module } from '@nestjs/common';

import { ProductsModule as CommonProductsModule } from 'common-server';

import { ProductsController } from './products.controller';

@Module({
  imports: [CommonProductsModule],
  controllers: [ProductsController],
})
export class ProductsModule {}
