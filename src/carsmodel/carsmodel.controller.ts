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
  import { IdDto, CarsmodelDto } from './dto';
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
    async getAllCarsmodel(): Promise<CarsmodelDto[]> {
      return this.carsmodelService.getCarsmodel();
    }
  
    @Get(':id')
    async getCarsmodelsById(@Param() params: IdDto): Promise<CarsmodelDto> {
      return this.carsmodelService.getSingleCarsmodel(params.id);
    }
  
    @Put(':id')
    updateCarsmodels(@Param() params: IdDto, @Body() body: CarsmodelDto): CarsmodelDto {
      return this.carsmodelService.updateCarsmodel(params.id, body.name);
    }
  
    @Delete(':id')
    deleteCarsmodelById(@Param() params: IdDto): { message: string } {
      this.carsmodelService.deleteCarsmodel(params.id);
      return { message: 'Uspjesno obrisano' };
    }
  }
  