import { IsNotEmpty, Length, IsArray, IsNumber } from "class-validator";

export class CreateVariantDto {
  @Length(3, 15)
  @IsNotEmpty({ message: "Color can't be empty" })
  color: string;

  @Length(6, 6)
  @IsNotEmpty({ message: "ColorCode can't be empty" })
  colorCode: string;

  @IsArray({ message: "Please provide more than one image" })
  @IsNotEmpty({ message: "Image can't be empty" })
  images: string[];

  @IsNotEmpty({ message: "Price can't be empty" })
  @IsNumber()
  price: number;
}
