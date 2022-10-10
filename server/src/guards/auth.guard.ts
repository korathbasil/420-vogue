import { Request } from 'express';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request & { cookies: any } = context
      .switchToHttp()
      .getRequest();

    console.log(request.url + request.authUser);
    if (!request.authUser) return false;
    return true;
  }
}
