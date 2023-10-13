import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Carsapi } from './type';
import { CONFIGURABLE_MODULE_ID } from '@nestjs/common/module-utils/constants';

@Injectable()
export class CarsapiService {
  private carapi: Carsapi[] = [];
  carsapis: Carsapi[];

  // constructor() {
  //   this.carsapis = [];
  // }
  // dali ovo treba?

  insertCarsapi(name: string, numberOfcars: number, vin: string, typeId: string, modelId: string): string {
    const carsapiId = uuidv4();
    const newCarsapi = new Carsapi(carsapiId, name, numberOfcars, vin, typeId, modelId);
    this.carsapis.push(newCarsapi);
    return carsapiId;
  }

  getCarsapi(): Carsapi[] {
    return this.carsapis;
  }

  getSingleCarsapi(carsapiId: string): Carsapi {
    const [carsapi] = this.findCarsapi(carsapiId);
    return carsapi;
  }

  updateCarsapi(carsapiId: string, name: string, numberOfcars: number, vin: string, typeId: string, modelId: string): Carsapi {
    const [carsapi] = this.findCarsapi(carsapiId);

    if (name) {
      carsapi.name = name;
    }
    if (numberOfcars) {
      carsapi.numberOfCars = numberOfcars;
    }

    if (vin) {
      carsapi.vin = vin;
    }

    if (typeId) {
      carsapi.typeId = typeId;
    }

    if (modelId) {
      carsapi.modelId = modelId;
    }


    return carsapi;
  }

  deleteCarsapi(carsapiId: string): void {
    const [, index] = this.findCarsapi(carsapiId);
    this.carsapis.splice(index, 1);
  }

  private findCarsapi(id: string): [Carsapi, number] {
    const carsapiIndex = this.carsapis.findIndex((carapi) => carapi.id === id);
    if (carsapiIndex === -1) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }
    return [this.carsapis[carsapiIndex], carsapiIndex];
  }
}
