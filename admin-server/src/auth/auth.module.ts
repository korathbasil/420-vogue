import { Module } from '@nestjs/common';

import { AdminModule } from 'src/admin/admin.module';
import { AuthTokenModule } from 'src/auth-token/auth-token.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [AdminModule, AuthTokenModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
