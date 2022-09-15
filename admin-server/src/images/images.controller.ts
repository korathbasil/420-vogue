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
  async getUploadUrls(
    @Body('keysAndTypes') keysAndTypes: { key: string; type: string }[],
  ) {
    const urls: { key: string; url: string }[] = [];
    try {
      for (const keyAndType of keysAndTypes) {
        const url = await this.imagesService.getPreSignedUrls(keyAndType);
        urls.push({ key: keyAndType.key, url });
      }
      return urls;
    } catch (error) {
      console.log(error);
      throw new BadRequestException();
    }
  }
}
