import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CarsmodelService } from './carsmodel.service';
import { CarsmodelDto } from './dto';
import { IdDto } from 'src/common/decorators';
import { Carsmodel } from './type';

@Controller('carsmodel')
export class CarsmodelController {
  constructor(private readonly carsmodelService: CarsmodelService) {}

  @Post()
  addCarmodels(@Body() body: CarsmodelDto): { id: string } {
    const generatedId = this.carsmodelService.insertCarsmodel(body.name);
    return { id: generatedId };
  }

  @Get()
  getAllCarsmodel(): Carsmodel[] {
    return this.carsmodelService.getCarsmodel();
  }

  @Get(':id')
  getCarsmodelsById(@Param() params: IdDto): Carsmodel {
    return this.carsmodelService.getSingleCarsmodel(params.id);
  }

  @Put(':id')
  updateCarsmodels(
    @Param() params: IdDto,
    @Body() body: CarsmodelDto,
  ): Carsmodel {
    return this.carsmodelService.updateCarsmodel(params.id, body.name);
  }

  @Delete(':id')
  deleteCarsmodelById(@Param() params: IdDto): {
    message: string;
  } {
    this.carsmodelService.deleteCarsmodel(params.id);
    return { message: 'Uspjesno obrisano' };
  }
}
