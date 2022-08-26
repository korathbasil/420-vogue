import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule as CommonUsersModule } from 'common-server';

import { UsersController } from './users.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '600s' },
    }),
    CommonUsersModule,
  ],
  controllers: [UsersController],
})
export class UsersModule {}
