import { randomBytes, scrypt as _scrypt } from "node:crypto";
import { promisify } from "node:util";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CryptoService {
  private scrypt: any;
  constructor() {
    this.scrypt = promisify(_scrypt);
  }
  async hashString(password: string): Promise<string> {
    const salt = randomBytes(8).toString("hex");
    const hash = (await this.scrypt(password, salt, 32)) as Buffer;

    return salt + "." + hash.toString("hex");
  }

  async compareHash(
    hashedPassword: string,
    password: string
  ): Promise<boolean> {
    const [salt, hash] = hashedPassword.split(".");

    const newHash = (await this.scrypt(password, salt, 32)) as Buffer;

    if (hash !== newHash.toString("hex")) return false;
    return true;
  }
}
