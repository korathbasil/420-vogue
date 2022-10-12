import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthTokenService } from 'src/auth-token/auth-token.service';

@Injectable()
export class SetUserMiddleware implements NestMiddleware {
  constructor(private readonly authTokenService: AuthTokenService) {}
  async use(req: Request, _: Response, next: NextFunction) {
    const jwtToken = req.cookies['access-token'];

    try {
      const userData = await this.authTokenService.verify(jwtToken);
      req.authUser = userData;
      return next();
    } catch (error) {
      req.authUser = null;
      return next();
    }
  }
}
