import { Injectable } from '@nestjs/common';
import { UsersService } from 'common-server';

@Injectable()
export class FavService {
  constructor(private readonly usersService: UsersService) {}
  addToFav(productId: string, userId: string) {
    return this.usersService.addFavourite(productId, userId);
  }

  removeFromFav(productId: string, userId: string) {}
}
