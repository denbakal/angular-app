import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirm-dialog.component.html'
})

export class ConfirmDialogComponent implements OnInit {
  title: string;
  message: string;

  constructor(
    private dialogRef: MdDialogRef<ConfirmDialogComponent>
  ) {}

  ngOnInit() {
  }
}
