import { IsNotEmpty, IsString, IsBoolean, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  completed: boolean;

}
