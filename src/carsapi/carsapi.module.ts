import { Module } from '@nestjs/common';
import { CarsapiController } from './carsapi.controller';
import { CarsapiService } from './carsapi.service';
import { CarstypeModule } from 'src/carstype/carstype.module';
import { CarsmodelModule } from 'src/carsmodel/carsmodel.module';

@Module({
  imports: [CarstypeModule, CarsmodelModule],
  controllers: [CarsapiController],
  providers: [CarsapiService],
})
export class CarsapiModule {}
