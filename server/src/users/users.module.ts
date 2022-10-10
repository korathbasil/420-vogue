import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersModule as CommonUsersModule } from 'common-server';
import { SetUserMiddleware } from 'src/middlewares/set-user.middleware';

import { AuthTokenModule } from '../auth-token/auth-token.module';
import { UsersController } from './users.controller';

@Module({
  imports: [AuthTokenModule, CommonUsersModule],
  controllers: [UsersController],
})
export class UsersModule {}
