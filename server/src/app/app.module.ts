import { Module } from '@nestjs/common';

import { ProductsModule } from '../products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ecommerce'),
    ProductsModule,
  ],
})
export class AppModule {}
