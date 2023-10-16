// import { Injectable, NotFoundException } from '@nestjs/common';
// import { v4 as uuidv4 } from 'uuid';
// import { Carsapi } from './type';
// import { CarstypeService } from 'src/carstype/carstype.service';
// import { CarsmodelService } from 'src/carsmodel/carsmodel.service';

// @Injectable()
// export class CarsapiService {
//   private carsapis: Carsapi[] = [];

//   constructor(
//     private readonly typeService: CarstypeService,
//     private readonly modelService: CarsmodelService,
//   ) {}

//   insertCarsapi(
//     name: string,
//     numberOfcars: number,
//     vin: string,
//     typeId: string,
//     modelId: string,
//   ): string {
//     const carsapiId = uuidv4();
//     // TODO: dodati provjeru, da se provjeri jer typeId i modelId postoje
//     // Treba provjeriti jel typeId postoji u typeServicu
//     // Treba provjeriti jel modelId postoji u modelService


import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Carsapi } from './type';
import { CarstypeService } from 'src/carstype/carstype.service';
import { CarsmodelService } from 'src/carsmodel/carsmodel.service';

@Injectable()
export class CarsapiService {
  private carsapis: Carsapi[] = [];

  constructor(
    private readonly typeService: CarstypeService,
    private readonly modelService: CarsmodelService,
  ) {}

  insertCarsapi(
    name: string,
    numberOfcars: number,
    vin: string,
    typeId: string,
    modelId: string,
  ): string {
   
    const typeExists = this.typeService.checkTypeExists(typeId);

    const modelExists = this.modelService.checkModelExists(modelId);

    if (!typeExists) {
      throw new NotFoundException(`Type sa ID ${typeId} nije nađen`);
    }

    if (!modelExists) {
      throw new NotFoundException(`Model sa ID ${modelId} nije nađen`);
    }

    const carsapiId = uuidv4();
    this.carsapis.push(
      new Carsapi(carsapiId, name, numberOfcars, vin, typeId, modelId),
    );
    return carsapiId;
  }

  // #


  getCarsapi(): Carsapi[] {
    return this.carsapis;
  }

  getSingleCarsapi(carsapiId: string): Carsapi {
    const [carsapi] = this.findCarsapi(carsapiId);
    return carsapi;
  }

  updateCarsapi(
    carsapiId: string,
    name: string,
    numberOfcars: number,
    vin: string,
    typeId: string,
    modelId: string,
  ): Carsapi {
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
