import { Injectable } from '@nestjs/common';
import { StorageService } from 'common-server';

@Injectable()
export class ImagesService {
  constructor(private readonly storageService: StorageService) {}

  async getPreSignedUrls(keyAndType: { key: string; type: string }) {
    return this.storageService.getSignedUrls(keyAndType);
  }
}
