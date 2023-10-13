import { IsNotEmpty, IsString, IsNumber, IsUUid } from 'class-validator';

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

  @IsUUid()
  typeId: string; 


  @IsUUid()
  modelId: string;

}


export class IdDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
