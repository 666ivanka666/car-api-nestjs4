import { Module } from '@nestjs/common';
import { CarsmodelController } from './carsmodel.controller';
import { CarsmodelService } from './carsmodel.service';

@Module({
  controllers: [CarsmodelController],
  providers: [CarsmodelService],
  exports: [CarsmodelService],
})
export class CarsmodelModule {}
