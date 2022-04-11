import { IsNotEmpty, Length, IsNumberString } from 'class-validator';

export class CreateUserDto {
  @Length(3, 25)
  @IsNotEmpty({ message: "First Name can't be empty" })
  firstName: string;

  @Length(3, 25)
  @IsNotEmpty({ message: "Last Name can't be empty" })
  lastName: string;

  @Length(3, 40)
  @IsNotEmpty({ message: 'Please provide a valid email' })
  email: string;

  @Length(10, 10)
  @IsNumberString({ message: 'Please provide a valid phone number' })
  @IsNotEmpty({ message: 'Please provide a valid phone number' })
  phone: string;

  @Length(8, 16)
  @IsNotEmpty({ message: "Password can't be empty" })
  password: string;
}
