import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent implements OnInit {
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
