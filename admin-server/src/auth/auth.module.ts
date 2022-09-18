import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AdminModule } from 'src/admin/admin.module';
import { AuthTokenModule } from 'src/auth-token/auth-token.module';
import { SetAdminMiddleware } from 'src/middlewares/set-admin.middleware';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '600s' },
    }),
    AdminModule,
    AuthTokenModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SetAdminMiddleware)
      .forRoutes({ path: 'auth', method: RequestMethod.GET });
  }
}
