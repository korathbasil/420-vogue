import { Module } from '@nestjs/common';

import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from '../products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ecommerce'),
    UsersModule,
    ProductsModule,
  ],
})
export class AppModule {}
