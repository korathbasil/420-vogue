import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersController } from './users.controller';

import { UsersModule as CommonUsersModule } from 'common-server';

@Module({
  imports: [CommonUsersModule],
  controllers: [UsersController],
})
export class UsersModule {}
