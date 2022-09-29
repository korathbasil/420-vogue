import { Length, IsNotEmpty } from 'class-validator';

export class UpdatePasswordDto {
  @Length(8, 16)
  @IsNotEmpty({ message: "Old password can't be empty" })
  oldPassword: string;

  @Length(8, 16)
  @IsNotEmpty({ message: "New password can't be empty" })
  newPassword: string;
}
