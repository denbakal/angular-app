import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventBus} from "../core/event/event-bus.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'persons',
  templateUrl: 'persons.component.html'
})

export class PersonsComponent implements OnInit, OnDestroy {
  events: string[] = [];
  subscription: Subscription;

  constructor(private eventBus: EventBus) {
  }

  ngOnInit() {
    console.log('Initialization persons...');
    this.subscription = this.eventBus.addHandler('global')
      .subscribe(message => {
        console.log('PersonsComponent - Event from EventBus: ' + message);
        this.events.push(message as string);
        console.log('PersonsComponent - Event from EventBus: ' + this.events.length);
      });
  }


  ngOnDestroy(): void {
    console.log('Destroy persons...');
    this.subscription.unsubscribe();
  }
}
