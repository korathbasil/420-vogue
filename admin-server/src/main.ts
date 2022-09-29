import { ValidationPipe } from '@nestjs/common';
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
        ? 'https://mpanel.420vogue.in'
        : 'http://localhost:3000',
  });

  app.use(cookieParser());

  app.useGlobalPipes(
    new ValidationPipe({
      groups: [],
    }),
  );

  await app.listen(PORT);
}
bootstrap();
