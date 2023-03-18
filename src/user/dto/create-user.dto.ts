import { IsString, IsEmail, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';


export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

}
