import { Module } from '@nestjs/common';
import { UsersModule } from 'common-server';

import { FavController } from './fav.controller';
import { FavService } from './fav.service';

@Module({
  imports: [UsersModule],
  controllers: [FavController],
  providers: [FavService],
})
export class FavModule {}
