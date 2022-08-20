import { Module } from '@nestjs/common';
import { UsersModule as CommonUsersModule } from 'common-server';

import { UsersController } from './users.controller';

@Module({
  imports: [CommonUsersModule],
  controllers: [UsersController],
})
export class UsersModule {}
