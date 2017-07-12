import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent implements OnInit {
  @Input('init')
  count: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
