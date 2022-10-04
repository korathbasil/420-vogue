import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthTokenService } from 'src/auth-token/auth-token.service';

@Injectable()
export class SetAdminMiddleware implements NestMiddleware {
  constructor(private readonly authTokenService: AuthTokenService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const jwtToken = req.cookies['access-token'];

    try {
      const adminData = await this.authTokenService.verify(jwtToken);
      req.user = adminData;
      return next();
    } catch (error) {
      req.user = null;
      return next();
    }
  }
}
