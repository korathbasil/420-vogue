import { IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {
  @Length(3, 25)
  @IsNotEmpty({ message: "First Name can't be empty" })
  firstname: string;

  @Length(3, 25)
  @IsNotEmpty({ message: "Last Name can't be empty" })
  lastname: string;

  @Length(3, 40)
  @IsNotEmpty({ message: "Please provide a valid email" })
  email: string;

  @Length(8, 16)
  @IsNotEmpty({ message: "Password can't be empty" })
  password: string;
}
