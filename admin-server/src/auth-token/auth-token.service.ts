import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminJwtPayload } from 'src/types/admin-jwt-payload';

@Injectable()
export class AuthTokenService {
  constructor(private readonly jwtService: JwtService) {}

  sign(payload: AdminJwtPayload) {
    return this.jwtService.signAsync(payload);
  }

  verify(token: string): Promise<AdminJwtPayload> {
    return this.jwtService.verifyAsync(token, {
      secret: 'secret',
    });
  }
}
