import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
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
    //code to validate the request object for roles and
    //restrictions

    const token = request.cookies['token'];

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
