import {Injectable} from '@angular/core';
import {EngineService} from "./engine.service";

@Injectable()
export class CarService {
  constructor(private engine: EngineService) {
  }

  getName() {
    return `Car with ${this.engine.getName()}(${this.engine.getHorsepower()} HP)`;
  }
}
