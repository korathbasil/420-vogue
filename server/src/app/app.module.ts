import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from '../products/products.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ecommerce'),
    PassportModule,
    UsersModule,
    ProductsModule,
    AuthModule,
  ],
})
export class AppModule {}
