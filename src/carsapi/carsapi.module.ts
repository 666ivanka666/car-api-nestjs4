import { Module } from '@nestjs/common';
import { CarsapiController } from './carsapi.controller';
import { CarsapiService } from './carsapi.service';


@Module({
  controllers: [CarsapiController],
  providers: [CarsapiService],
})
export class CarsapiModule {}
