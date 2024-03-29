import { Module } from '@nestjs/common';
import { StorageModule } from 'common-server';

import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';

@Module({
  imports: [StorageModule],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
