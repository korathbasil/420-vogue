import { Injectable } from "@nestjs/common";
import { S3 } from "aws-sdk";

@Injectable()
export class StorageService {
  private s3: S3;
  private readonly _BUCKET_NAME = "static.420vogue.in";
  private readonly _EXPIRY = 300; // in seconds
  private readonly config = {
    Bucket: this._BUCKET_NAME,
    Expires: this._EXPIRY,
  };

  constructor() {
    this.s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  }

  async getSignedUrls(key: string) {
    const url = await this.s3.getSignedUrlPromise("putObject", {
      ...this.config,
      Key: key,
    });
    return url;
  }
}
