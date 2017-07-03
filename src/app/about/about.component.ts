import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-about',
 templateUrl: 'about.component.html'
})

export class AboutComponent implements OnInit {
 constructor() { }

 ngOnInit() {
   console.log('init about (bearer-token) ' + localStorage.getItem('bearer-token'));
   console.log('init about ' + localStorage.getItem('refresh-token'));
 }
}
