import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import { AuthTokenService } from 'src/auth-token/auth-token.service';

import { AdminJwtPayload } from 'src/types/admin-jwt-payload';

@Injectable()
export class SetAdminMiddleware implements NestMiddleware {
  constructor(private readonly authTokenService: AuthTokenService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const jwtToken = req.cookies['access-token'];

    try {
      const adminData: AdminJwtPayload = await this.authTokenService.verify(
        jwtToken,
      );
      req.admin = adminData;
      return next();
    } catch (error) {
      req.admin = null;
      return next();
    }
  }
}
