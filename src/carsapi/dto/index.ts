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

  @IsUUID()
  typeId: string; 


  @IsUUID()
  modelId: string;

}


export class IdDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
