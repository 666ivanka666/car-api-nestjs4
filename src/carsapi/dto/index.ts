import { IsNotEmpty, IsString, IsNumber, IsUUID } from 'class-validator';

export class CarsapiDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  numberOfcars: number;

  @IsString()
  @IsNotEmpty()
  vin: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID(4)
  typeId: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID(4)
  modelId: string;
}
