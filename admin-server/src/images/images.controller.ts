import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post('/urls')
  @UsePipes(ValidationPipe)
  async getUploadUrls(@Body('fileKeys') keys: string[]) {
    const urls: { key: string; url: string }[] = [];
    try {
      for (const key of keys) {
        const url = await this.imagesService.getPreSignedUrls(key);
        urls.push({ key, url });
      }
      return urls;
    } catch (error) {
      console.log(error);
      throw new BadRequestException();
    }
  }
}
