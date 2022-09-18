import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

import { AdminJwtPayload } from 'src/types/admin-jwt-payload';

@Injectable()
export class AdminMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const jwtToken = req.cookies['access-token'];

    try {
      const adminData: AdminJwtPayload = await this.jwtService.verifyAsync(
        jwtToken,
        {
          secret: 'secret',
        },
      );
      req.admin = adminData;
      return next();
    } catch (error) {
      req.admin = null;
      return next();
    }
  }
}
