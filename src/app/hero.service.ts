import { Injectable } from '@angular/core';
import {Hero} from "./hero.model";
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService {
  gerHeroes(): Hero[] {
    return HEROES;
  }
}
