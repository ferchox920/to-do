import { IsString, IsEmail, Validate, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  @Validate((value: string) => typeof value === 'string')
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
