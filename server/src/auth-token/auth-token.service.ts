import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserJwtPayload } from 'src/lib/types';

@Injectable()
export class AuthTokenService {
  constructor(private readonly jwtService: JwtService) {}

  sign(payload: UserJwtPayload) {
    return this.jwtService.signAsync(payload, {
      secret: process.env.USER_SERVER_JWT_SECRET,
    });
  }

  verify(token: string): Promise<UserJwtPayload> {
    return this.jwtService.verifyAsync(token, {
      secret: process.env.USER_SERVER_JWT_SECRET,
    });
  }
}
