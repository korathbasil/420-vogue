import { IsNotEmpty, Length } from 'class-validator';

export class LoginUserDto {
  @Length(3, 40)
  @IsNotEmpty({ message: 'Please provide a valid email' })
  email: string;

  @Length(8, 16)
  @IsNotEmpty({ message: "Password can't be empty" })
  password: string;
}
