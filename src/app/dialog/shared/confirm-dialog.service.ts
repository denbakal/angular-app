import {Injectable} from '@angular/core';
import {MdDialog, MdDialogRef} from "@angular/material";
import {Observable} from "rxjs/Observable";
import {ConfirmDialogComponent} from "../confitm-dialog.component";

@Injectable()
export class ConfirmDialogService {

  constructor(
    private dialog: MdDialog
  ) {}

  public confirm(title: string, message: string): Observable<boolean> {
    let dialogRef: MdDialogRef<ConfirmDialogComponent>;

    dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }
}
