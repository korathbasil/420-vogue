import { IsNotEmpty, Length, isArray, IsArray } from "class-validator";

class ProductVariant {
  @Length(3, 15)
  @IsNotEmpty({ message: "Color can't be empty" })
  color: string;

  @Length(7, 7)
  @IsNotEmpty({ message: "ColorCode can't be empty" })
  colorCode: string;

  @IsArray("Invalid images")
  @IsNotEmpty({ message: "Brand can't be empty" })
  images: string[];

  @IsNotEmpty({ message: "Price can't be empty" })
  price: number;
}

export class CreateProductDto {
  @Length(3, 15)
  @IsNotEmpty({ message: "Brand can't be empty" })
  brand: string;

  @Length(3, 15)
  @IsNotEmpty({ message: "Style can't be empty" })
  style: string;

  @Length(3, 15)
  @IsNotEmpty({ message: "Category can't be empty" })
  category: string;

  @Length(3, 15)
  @IsNotEmpty({ message: "Sub-category can't be empty" })
  subCategory: string;

  variants: ProductVariant[];
}
