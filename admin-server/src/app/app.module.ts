import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

import { AdminModule } from 'src/admin/admin.module';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';
import { ImagesModule } from 'src/images/images.module';
import { AuthModule } from 'src/auth/auth.module';
import { AuthTokenModule } from 'src/auth-token/auth-token.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/ecommerce'),
    PassportModule,
    AuthModule,
    AdminModule,
    UsersModule,
    ProductsModule,
    ImagesModule,
    AuthTokenModule,
  ],
})
export class AppModule {}
