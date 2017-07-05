import { Injectable } from '@angular/core';
import {Hero} from "./hero.model";
import {HEROES} from "./mock-heroes";
import {Observable} from "rxjs/Observable";
import { Http, Response } from '@angular/http';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class HeroService {
  constructor(private http: Http) {}
  /*gerHeroes(): Promise<Hero[]> {
    // return Promise.resolve(HEROES);
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(HEROES), 2000)
    });
  }*/

  // private heroesUrl = './assets/heroes.json';
  private heroesUrl = 'api/heroes';

  gerHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
      .map((res: Response) => this.extractData(res));
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  getHero(id: number): Observable<Hero> {
    return this.gerHeroes()
      .map(heroes => heroes.find(hero => hero.id == id));
  }
}
