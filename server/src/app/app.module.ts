import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from '../products/products.module';
import { AuthModule } from 'src/auth/auth.module';
import { PaymentsModule } from 'src/payments/payments.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/ecommerce'),
    PassportModule,
    UsersModule,
    ProductsModule,
    AuthModule,
    PaymentsModule,
  ],
})
export class AppModule {}
