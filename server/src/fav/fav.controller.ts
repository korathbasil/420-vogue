import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Post,
} from '@nestjs/common';
import { FavService } from './fav.service';

@Controller('fav')
export class FavController {
  constructor(private readonly favService: FavService) {}

  @Post('/')
  async addTofav(@Body('id') productId: string) {
    try {
      await this.favService.addToFav(productId, '630a06eee4d1b07c37c07f9b');
    } catch (error) {
      console.log(error);
      throw new BadRequestException();
    }
  }

  @Delete('/:id')
  rmoveFromFav(@Body('id') productId: string) {}
}
