import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner-async',
  templateUrl: 'banner-async.component.html',
  styleUrls:  ['./banner-async.component.css']
})

export class BannerAsyncComponent implements OnInit {
  title = 'Test Tour of Heroes';

  constructor() {
  }

  ngOnInit() {
  }
}
