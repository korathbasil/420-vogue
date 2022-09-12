import { Injectable } from '@nestjs/common';
import { StorageService } from 'common-server';

@Injectable()
export class ImagesService {
  constructor(private readonly storageService: StorageService) {}

  async getPreSignedUrls(key: string) {
    return this.storageService.getSignedUrls(key);
  }
}
