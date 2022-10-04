import { Module } from '@nestjs/common';
import { UsersModule } from 'common-server';

import { AuthTokenModule } from 'src/auth-token/auth-token.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from '../lib/auth/google.strategy';

@Module({
  imports: [AuthTokenModule, UsersModule],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy],
})
export class AuthModule {}
