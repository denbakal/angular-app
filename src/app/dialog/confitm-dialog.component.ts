import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirm-dialog.component.html'
})

export class ConfirmDialogComponent implements OnInit {
  title: string;
  message: string;

  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {}

  ngOnInit() {
  }
}
