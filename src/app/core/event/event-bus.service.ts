import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {GlobalEvent} from "./global-event.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class EventBus {
  private eventBus: Subject<GlobalEvent>;

  constructor() {
    this.eventBus = new Subject<GlobalEvent>()
  }

  fireEvent(key: any, data?: any) {
    this.eventBus.next({key, data});
  }

  addHandler<T>(key: any): Observable<T> {
    return this.eventBus.asObservable()
                 .filter(event => event.key === key)
                 .map(event => <T>event.data);
  }
}
