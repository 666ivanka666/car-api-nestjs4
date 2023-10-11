import { IsNotEmpty, IsString } from 'class-validator';

export class CarstypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class IdDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
