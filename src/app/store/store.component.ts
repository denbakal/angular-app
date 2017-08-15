import {Component} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {DECREMENT, INCREMENT, RESET} from "./counter.reducer";
import {AppStore} from "../app.store";

@Component({
  selector: 'my-store',
  template: `
		<button (click)="increment()">Increment</button>
		<div>Current Count: {{ counter | async }}</div>
		<button (click)="decrement()">Decrement</button>

		<button (click)="reset()">Reset Counter</button>
	`
})
export class StoreComponent {
  counter: Observable<number>;

  constructor(private store: Store<AppStore>) {
    this.counter = store.select('counter');
  }

  increment(){
    this.store.dispatch({ type: INCREMENT });
  }

  decrement(){
    this.store.dispatch({ type: DECREMENT });
  }

  reset(){
    this.store.dispatch({ type: RESET });
  }
}
