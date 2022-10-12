import { IsNotEmpty, Length } from "class-validator";

export class CreateAddressDto {
  @Length(5, 40)
  @IsNotEmpty({ message: "1st line of address can't be empty" })
  line1: string;

  @Length(5, 40)
  @IsNotEmpty({ message: "2nd line of address can't be empty" })
  line2: string;

  @Length(5, 40)
  @IsNotEmpty({ message: "2nd line of address can't be empty" })
  line3: string;

  @Length(3, 30)
  @IsNotEmpty({ message: "Please give a valid city name" })
  city: string;

  @Length(6, 6)
  @IsNotEmpty({ message: "PLease give a valid PIN number" })
  pin: string;

  @Length(3, 30)
  @IsNotEmpty({ message: "Please give a valid state name" })
  state: string;

  @Length(3, 40)
  @IsNotEmpty({ message: "Name of the address can't be empty" })
  name: string;
}
