import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
 selector: 'app-about',
 templateUrl: 'about.component.html'
})

export class AboutComponent implements OnInit {
 constructor(
   private titleService: Title
 ) { }

 ngOnInit() {
   this.titleService.setTitle('About me');
   console.log('init about (bearer-token) ' + localStorage.getItem('bearer-token'));
   console.log('init about ' + localStorage.getItem('refresh-token'));
 }
}
