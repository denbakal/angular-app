import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent implements OnInit {
  @Input('init')
  count: number = 0;

  @Output('update')
  change: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  increment() {
    this.count++;
    this.change.emit(this.count);
  }

  decrement() {
    this.count--;
    this.change.emit(this.count);
  }
}
