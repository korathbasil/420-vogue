import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

type JWtPayload = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
};

@Injectable()
export class AuthTokenService {
  constructor(private readonly jwtService: JwtService) {}

  sign(payload: JWtPayload) {
    return this.jwtService.signAsync(payload);
  }

  verify(token: string) {
    return this.jwtService.verifyAsync(token, {
      secret: 'secret',
    });
  }
}
