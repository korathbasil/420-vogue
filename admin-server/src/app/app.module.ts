import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AdminModule } from 'src/admin/admin.module';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';
import { AuthModule } from 'src/auth/auth.module';
import { AuthTokenModule } from 'src/auth-token/auth-token.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ecommerce'),
    AuthModule,
    AdminModule,
    UsersModule,
    ProductsModule,
    AuthTokenModule,
  ],
})
export class AppModule {}
