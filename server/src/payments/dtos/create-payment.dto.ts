import {} from 'class-transformer';

export class CreatePayemtDto {
  products: {
    id: string;
    variant: string;
    qty: number;
  }[];
}
