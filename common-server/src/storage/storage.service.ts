import { Injectable } from "@nestjs/common";
import { S3 } from "aws-sdk";

@Injectable()
export class StorageService {
  private s3: S3;
  private readonly _BUCKET_NAME = "static.420vogue.in";
  private readonly _REGION = "ap-south-1";

  constructor() {
    this.s3 = new S3({
      region: this._REGION,
      accessKeyId: process.env.ADMIN_SERVER_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.ADMIN_SERVER_AWS_SECRET_ACCESS_KEY,
    });
  }

  async getSignedUrls(keyAndType: { key: string; type: string }) {
    const url = await this.s3.getSignedUrlPromise("putObject", {
      Bucket: this._BUCKET_NAME,
      Key: keyAndType.key,
      ContentType: keyAndType.type,
    });
    return url;
  }
}
