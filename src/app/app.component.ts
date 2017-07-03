import { Component } from '@angular/core';

@Component({
 selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/login" routerLinkActive="active">Sign In</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Tour of Heroes';
}
