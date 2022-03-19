import { Module } from '@nestjs/common';

import { ProductModule } from '../product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ecommerce'),
    ProductModule,
  ],
})
export class AppModule {}
