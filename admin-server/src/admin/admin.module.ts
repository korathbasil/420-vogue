import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CryptoModule } from 'common-server';
import { SetAdminMiddleware } from 'src/middlewares/set-admin.middleware';

import { AuthTokenModule } from 'src/auth-token/auth-token.module';
import { AdminController } from './admin.controller';
import { adminSchema } from './admin.model';
import { AdminRepository } from './admin.repository';
import { AdminService } from './admin.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Admin', schema: adminSchema }]),
    AuthTokenModule,
    CryptoModule,
  ],
  controllers: [AdminController],
  providers: [AdminService, AdminRepository],
  exports: [AdminService],
})
export class AdminModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SetAdminMiddleware).forRoutes(AdminController);
  }
}
