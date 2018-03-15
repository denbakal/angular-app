import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material";
import {Observable} from "rxjs/Observable";
import {ConfirmDialogComponent} from "../confitm-dialog.component";

@Injectable()
export class ConfirmDialogService {

  constructor(
    private dialog: MatDialog
  ) {}

  public confirm(title: string, message: string): Observable<boolean> {
    let dialogRef: MatDialogRef<ConfirmDialogComponent>;

    dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }
}
