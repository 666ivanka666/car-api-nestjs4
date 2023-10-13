import { IsNotEmpty, IsString } from 'class-validator';

export class CarstypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
