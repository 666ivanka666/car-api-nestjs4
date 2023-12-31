import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CarstypeService } from './carstype.service';
import { CarstypeDto } from './dto';
import { IdDto } from 'src/common/decorators';
import { Carstype } from './type';

@Controller('carstype')
export class CarstypeController {
  constructor(private readonly carstypeService: CarstypeService) {}

  @Post()
  addCartype(@Body() body: CarstypeDto): { id: string } {
    const generatedId = this.carstypeService.insertCarstype(body.name);
    return { id: generatedId };
  }

  @Get()
  getAllCarstype(): Carstype[] {
    return this.carstypeService.getCarstype();
  }

  @Get(':id')
  getCarstypeById(@Param() params: IdDto): Carstype {
    return this.carstypeService.getSingleCarstype(params.id);
  }

  @Put(':id')
  updateCarstype(@Param() params: IdDto, @Body() body: CarstypeDto): Carstype {
    return this.carstypeService.updateCarstype(params.id, body.name);
  }

  @Delete(':id')
  deleteCarstypeById(@Param() params: IdDto): { message: string } {
    this.carstypeService.deleteCarstype(params.id);
    return { message: 'Uspjesno obrisano' };
  }
}
