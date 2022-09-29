import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class SuperAuthGuard implements CanActivate {
  constructor() {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request & { cookies: any } = context
      .switchToHttp()
      .getRequest();

    if (!request.admin) return false;
    if (request.admin.role !== 'SUPERADMIN') return false;
    return true;
  }
}
