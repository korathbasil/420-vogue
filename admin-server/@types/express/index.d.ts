import { AdminJwtPayload } from 'src/types/admin-jwt-payload';
declare global {
  namespace Express {
    interface Request {
      admin?: AdminJwtPayload;
    }
  }
}
