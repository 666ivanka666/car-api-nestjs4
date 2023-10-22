import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Carstype } from './type';

@Injectable()
export class CarstypeService {
  private carstypes: Carstype[] = [];

  insertCarstype(name: string): string {
    const carstypeId = uuidv4();
    this.carstypes.push(new Carstype(carstypeId, name));
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

  findCarstype(id: string): [Carstype, number] {
    const carstypeIndex = this.carstypes.findIndex(
      (carstype) => carstype.id === id,
    );
    if (carstypeIndex === -1) {
      throw new NotFoundException(`Car type with ID ${id} not found`);
    }
    return [this.carstypes[carstypeIndex], carstypeIndex];
  }
}
