import { IsNotEmpty, IsString } from 'class-validator';

export class CarsapiDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  numberOfcars: number;
  vin: string;
  typeId: string; 
  modelId: string;

}


export class IdDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
