import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html'
})

export class ContactComponent implements OnInit {
  info: string;

  constructor(
    private mdDialogRef: MdDialogRef<ContactComponent>
  ) {}

  ngOnInit() {
  }

  onSend() {
    console.log('Sending contact info: ' + this.info);
    this.mdDialogRef.close();
  }
}
