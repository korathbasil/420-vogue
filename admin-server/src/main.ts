import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT: number = parseInt(process.env.ADMIN_SERVER_PORT) | 8001;

  app.enableCors({
    credentials: true,
    origin:
      process.env.NODE_ENV === 'prod' ? 'mpanel.420vogue.in' : 'localhost:3000',
  });

  app.use(cookieParser());
  await app.listen(PORT);
}
bootstrap();
