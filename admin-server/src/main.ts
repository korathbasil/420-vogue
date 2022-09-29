import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = (process.env.ADMIN_SERVER_PORT as string) || '8001';

  app.enableCors({
    credentials: true,
    origin:
      process.env.NODE_ENV === 'prod'
        ? 'mpanel.420vogue.in'
        : 'http://localhost:3000',
  });

  app.use(cookieParser());
  await app.listen(PORT);
}
bootstrap();
