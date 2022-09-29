import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminJwtPayload } from 'src/types/admin-jwt-payload';

@Injectable()
export class AuthTokenService {
  constructor(private readonly jwtService: JwtService) {}

  sign(payload: AdminJwtPayload) {
    return this.jwtService.signAsync(payload, {
      secret: process.env.ADMIN_SERVER_JWT_SECRET,
    });
  }

  verify(token: string): Promise<AdminJwtPayload> {
    return this.jwtService.verifyAsync(token, {
      secret: process.env.ADMIN_SERVER_JWT_SECRET,
    });
  }
}
