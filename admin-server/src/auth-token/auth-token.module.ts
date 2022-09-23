import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthTokenService } from './auth-token.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.ADMIN_SERVER_JWT_TOKEN,
      signOptions: { expiresIn: '259200s' },
    }),
  ],
  providers: [AuthTokenService],
  exports: [AuthTokenService],
})
export class AuthTokenModule {}
