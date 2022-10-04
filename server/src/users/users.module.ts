import { Module } from '@nestjs/common';
import { UsersModule as CommonUsersModule } from 'common-server';

import { AuthTokenModule } from 'src/auth-token/auth-token.module';
import { UsersController } from './users.controller';

@Module({
  imports: [AuthTokenModule, CommonUsersModule],
  controllers: [UsersController],
})
export class UsersModule {}
