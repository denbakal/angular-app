import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {MdDialog, MdDialogConfig} from "@angular/material";
import {ContactComponent} from "../contact/contact.component";

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html'
})

export class AboutComponent implements OnInit {
  dialogConfig: MdDialogConfig;

  constructor(
    private titleService: Title,
    private dialog: MdDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('About me');
    console.log('init about (bearer-token) ' + localStorage.getItem('bearer-token'));
    console.log('init about ' + localStorage.getItem('refresh-token'));

    this.dialogConfig = new MdDialogConfig();
    this.dialogConfig.disableClose = true;
  }

  openContactDialog(): void {
    this.dialog.open(ContactComponent, this.dialogConfig);
  }
}
