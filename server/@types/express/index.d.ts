import { UserJwtPayload } from 'src/lib/types';

declare global {
  namespace Express {
    interface Request {
      user?: UserJwtPayload;
    }
  }
}
