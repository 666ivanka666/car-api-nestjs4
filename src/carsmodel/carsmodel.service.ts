import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Carsmodel } from './type';

@Injectable()
export class CarsmodelService {
  private carsmodels: Carsmodel[] = [];

  insertCarsmodel(name: string): string {
    const carsmodelId = uuidv4();
    this.carsmodels.push(new Carsmodel(carsmodelId, name));
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

  findCarsmodel(id: string): [Carsmodel, number] {
    const carsmodelIndex = this.carsmodels.findIndex(
      (carsmodel) => carsmodel.id === id,
    );
    if (carsmodelIndex === -1) {
      throw new NotFoundException(`Car model with ID ${id} not found`);
    }
    return [this.carsmodels[carsmodelIndex], carsmodelIndex];
  }
}
