import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Carstype } from './type';



@Injectable()
export class CarstypeService {
  insertCarstype(name: string) {
    throw new Error('Method not implemented.');
  }
  private cars: Carstype[] = [];
  carstypes: Carstype[];

  // constructor() {
  //   this.carstypes = [];
  // } TREBA OVO?
  
  insertCarsmodel(name: string): string {
    const carstypeId = uuidv4();
    const newCarstype = new Carstype(carstypeId, name);
    this.carstypes.push(newCarstype);
    return carstypeId;
  }

  getCarstype(): Carstype[] {
    return this.carstypes;
  }

  getSingleCarstype(carstypeId: string): Carstype {
    const [carstype] = this.findCarstype(carstypeId);
    return carstype;
  }

  updateCarstype(carstypeId: string, name: string): Carstype {
    const [carstype] = this.findCarstype(carstypeId);

    if (name) {
      carstype.name = name;
    }

    return carstype;
  }

  deleteCarstype(carstypeId: string): void {
    const [, index] = this.findCarstype(carstypeId);
    this.carstypes.splice(index, 1);
  }

  private findCarstype(id: string): [Carstype, number] {
    const carstypeIndex = this.carstypes.findIndex((carstype) => carstype.id === id);
    if (carstypeIndex === -1) {
      throw new NotFoundException(`Car type with ID ${id} not found`);
    }
    return [this.carstypes[carstypeIndex], carstypeIndex];
  }
}
