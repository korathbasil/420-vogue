import { IsNotEmpty, Length } from "class-validator";

export class CreateProductDto {
  @Length(3, 15)
  @IsNotEmpty({ message: "Brand name can't be empty" })
  brand: string;
}
