import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ' <h1>My APP!!! {{title}}</h1> <toh-heroes></toh-heroes>',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appas';
}
