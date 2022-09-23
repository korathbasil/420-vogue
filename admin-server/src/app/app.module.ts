import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

import { AdminModule } from 'src/admin/admin.module';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';
import { ImagesModule } from 'src/images/images.module';
import { AuthModule } from 'src/auth/auth.module';
import { AuthTokenModule } from 'src/auth-token/auth-token.module';
import { SetAdminMiddleware } from 'src/middlewares/set-admin.middleware';

function getDatabaseUrl() {
  if (process.env.NODE_ENV === 'prod') {
    return `${process.env.DATABASE_URL_WITH_HOST_AND_PORT}/${process.env.DATABASE_NAME}`;
  }

  return 'mongodb://localhost:27017/ecommerce';
}

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(getDatabaseUrl()),
    PassportModule,
    AuthModule,
    AdminModule,
    UsersModule,
    ProductsModule,
    ImagesModule,
    AuthTokenModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SetAdminMiddleware).forRoutes('*');
  }
}
