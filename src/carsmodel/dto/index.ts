import { IsNotEmpty, IsString } from 'class-validator';

export class CarsmodelDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
