import { Module } from '@nestjs/common';
import { UsersService } from 'common-server';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [UsersService],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
