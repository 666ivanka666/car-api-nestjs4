import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Carsmodel } from './type';



@Injectable()
export class CarsmodelService {
  private carsmodel: Carsmodel[] = [];
  carsmodels: Carsmodel[];

  // constructor() {
  //   this.carsmodels = [];
  // } treba ovo?

  
  insertCarsmodel(name: string): string {
    const carsmodelId = uuidv4();
    const newCarsmodel = new Carsmodel(carsmodelId, name);
    this.carsmodels.push(newCarsmodel);
    return carsmodelId;
  }

  getCarsmodel(): Carsmodel[] {
    return this.carsmodels;
  }

  getSingleCarsmodel(carsmodelId: string): Carsmodel {
    const [carsmodel] = this.findCarsmodel(carsmodelId);
    return carsmodel;
  }
 

  updateCarsmodel(carsmodelId: string, name: string): Carsmodel {
    const [carsmodel] = this.findCarsmodel(carsmodelId);

    if (name) {
      carsmodel.name = name;
    }

    return carsmodel;
  }

  deleteCarsmodel(carsmodelId: string): void {
    const [, index] = this.findCarsmodel(carsmodelId);
    this.carsmodels.splice(index, 1);
  }

  private findCarsmodel(id: string): [Carsmodel, number] {
    const carsmodelIndex = this.carsmodels.findIndex((carsmodel) => carsmodel.id === id);
    if (carsmodelIndex === -1) {
      throw new NotFoundException(`Car model with ID ${id} not found`);
    }
    return [this.carsmodels[carsmodelIndex], carsmodelIndex];
  }
}
