import { IsNotEmpty, IsString } from 'class-validator';

export class CarsmodelDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class IdDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
