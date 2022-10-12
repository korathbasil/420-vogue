import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

import { UsersModule } from '../users/users.module';
import { ProductsModule } from '../products/products.module';
import { AuthModule } from 'src/auth/auth.module';
import { PaymentsModule } from 'src/payments/payments.module';
import { FavModule } from 'src/fav/fav.module';
import { SetUserMiddleware } from 'src/middlewares/set-user.middleware';
import { AuthTokenModule } from 'src/auth-token/auth-token.module';
import { AddressesModule } from 'src/addresses/addresses.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/ecommerce'),
    AuthTokenModule,
    PassportModule,
    UsersModule,
    ProductsModule,
    AuthModule,
    PaymentsModule,
    FavModule,
    AddressesModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SetUserMiddleware).forRoutes('*');
  }
}
