import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EventBus} from "../core/event/event-bus.service";

@Component({
  selector: 'counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent implements OnInit {
  @Input('init')
  count: number = 0;

  @Output('update')
  change: EventEmitter<number> = new EventEmitter<number>();

  constructor(private eventBus: EventBus) {
  }

  ngOnInit() {
  }

  increment() {
    this.count++;
    this.change.emit(this.count);
    this.eventBus.fireEvent('global', 'test');
  }

  decrement() {
    this.count--;
    this.change.emit(this.count);
  }
}
