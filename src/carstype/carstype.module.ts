import { Module } from '@nestjs/common';
import { CarstypeController } from './carstype.controller';
import { CarstypeService } from './carstype.service';

@Module({
  controllers: [CarstypeController],
  providers: [CarstypeService],
})
export class CarstypeModule {}
