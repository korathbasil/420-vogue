import { randomBytes, scrypt as _scrypt } from 'node:crypto';
import { promisify } from 'node:util';

const scrypt = promisify(_scrypt);

export async function hashString(password: string): Promise<string> {
  const salt = randomBytes(8).toString('hex');
  const hash = (await scrypt(password, salt, 32)) as Buffer;

  return salt + '.' + hash.toString('hex');
}

export async function compareHash(
  hashedPassword: string,
  password: string,
): Promise<boolean> {
  const [salt, hash] = hashedPassword.split('.');

  const newHash = (await scrypt(password, salt, 32)) as Buffer;

  if (hash !== newHash.toString('hex')) return false;
  return true;
}
