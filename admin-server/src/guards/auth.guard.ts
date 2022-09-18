import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request & { cookies: any } = context
      .switchToHttp()
      .getRequest();

    const token = request.cookies['access-token'] as string;

    if (!token) return false;

    try {
      this.verifyJwt(token);
      return true;
    } catch (error) {
      return false;
    }
  }

  async verifyJwt(jwt: string) {
    type JwtPayload = {
      _id: string;
      firstname: string;
      lastname: string;
      email: string;
    };
    try {
      const userData: JwtPayload = await this.jwtService.verifyAsync(jwt, {
        secret: 'secret',
      });

      return userData;
    } catch (e) {
      throw e;
    }
  }
}
