import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class NameDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  first: string;

  @IsNotEmpty()
  @IsString()
  last: string;
}

export class CreateUserDto {
  id: any;
  _id: any;

  @ValidateNested()
  @Type(() => NameDto)
  name: NameDto;
}
