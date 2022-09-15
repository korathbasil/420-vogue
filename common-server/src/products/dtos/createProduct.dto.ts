import { IsNotEmpty, Length, IsArray } from "class-validator";

export class CreateProductDto {
  @Length(3, 15)
  @IsNotEmpty({ message: "Brand can't be empty" })
  brand: string;

  @Length(3, 50)
  @IsNotEmpty({ message: "Style can't be empty" })
  style: string;

  @Length(3, 15)
  @IsNotEmpty({ message: "Category can't be empty" })
  category: string;

  @Length(3, 15)
  @IsNotEmpty({ message: "Sub-category can't be empty" })
  subCategory: string;
}
