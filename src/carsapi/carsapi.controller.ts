import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CarsapiService } from './carsapi.service';
import { CarsapiDto } from './dto';
import { Carsapi } from './type';
import { IdDto } from 'src/common/decorators';

@Controller('cars')
export class CarsapiController {
  constructor(private readonly carsapiService: CarsapiService) {}

  @Post()
  addCarsapi(@Body() body: CarsapiDto): { id: string } {
    const generatedId = this.carsapiService.insertCarsapi(
      body.name,
      body.numberOfcars,
      body.vin,
      body.typeId,
      body.modelId,
    );
    return { id: generatedId };
  }

  @Get()
  getAllCarsapi(): Carsapi[] {
    return this.carsapiService.getCarsapi();
  }

  @Get(':id')
  getCarsapiById(@Param() params: IdDto): Carsapi {
    return this.carsapiService.getSingleCarsapi(params.id);
  }

  @Put(':id')
  updateCarsapi(@Param() params: IdDto, @Body() body: CarsapiDto): Carsapi {
    return this.carsapiService.updateCarsapi(
      params.id,
      body.name,
      body.numberOfcars,
      body.vin,
      body.typeId,
      body.modelId,
    );
  }

  @Delete(':id')
  deleteCarapiById(@Param() params: IdDto): { message: string } {
    this.carsapiService.deleteCarsapi(params.id);
    return { message: 'Uspjesno obrisano' };
  }
}
