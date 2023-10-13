import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarstypeModule } from './carstype/carstype.module';
import { CarsmodelController } from './carsmodel/carsmodel.controller';
import { CarsmodelService } from './carsmodel/carsmodel.service';
import { CarsmodelModule } from './carsmodel/carsmodel.module';
import { CarsapiModule } from './carsapi/carsapi.module';
import { CarsapiController } from './carsapi/carsapi.controller';
import { CarsapiService } from './carsapi/carsapi.service';


@Module({
  imports: [CarstypeModule, CarsapiModule, CarsmodelModule],
  controllers: [AppController, CarsmodelController, CarsapiController],
  providers: [AppService, CarsmodelService, CarsapiService],
})
export class AppModule {}
