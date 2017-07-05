import {InMemoryDbService} from "angular-in-memory-web-api";
import {Hero} from "./hero.model";

export class HeroData implements InMemoryDbService {
  createDb() {
    let heroes: Hero[] = [
      {id: 1, name: 'Windstorm'},
      {id: 2, name: 'Bombasto'},
      {id: 3, name: 'Magneta'},
      {id: 4, name: 'Tornado'}
    ];
    return {heroes};
  }
}
