import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
// import {MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";
import {ContactComponent} from "../contact/contact.component";
import {ConfirmDialogService} from "../dialog/shared/confirm-dialog.service";
import {EventBus} from "../core/event/event-bus.service";
import {Subscription} from "rxjs/Subscription";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html'
})

export class AboutComponent implements OnInit, OnDestroy {
  dialogConfig: MatDialogConfig;
  events: string[] = [];
  subscription: Subscription;

  constructor(
    private titleService: Title,
    private dialog: MatDialog,
    private dialogService: ConfirmDialogService,
    private eventBus: EventBus
  ) {}

  ngOnInit() {
    this.titleService.setTitle('About me');
    console.log('init about (bearer-token) ' + localStorage.getItem('bearer-token'));
    console.log('init about ' + localStorage.getItem('refresh-token'));

    this.dialogConfig = new MatDialogConfig();
    this.dialogConfig.disableClose = true;

    this.subscription = this.eventBus.addHandler<string>('global')
                 .subscribe(message => {
                   console.log('AboutComponent - Event from EventBus: ' + message);
                   this.events.push(message as string);
                   console.log('AboutComponent - Event from EventBus: ' + this.events.length);
                 });
  }

  openContactDialog(): void {
    let dialogRef: MatDialogRef<ContactComponent>;

    dialogRef = this.dialog.open(ContactComponent, this.dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Result after close dialog: ' + result);
    })
  }

  onConfirm(): void {
    this.dialogService
      .confirm('Dialog', 'Are you sure you want to do this?')
      .subscribe(res => {
        console.log('Result: ' + res);
      });
  }

  ngOnDestroy(): void {
    console.log('Destroy about...');
    this.subscription.unsubscribe();
  }
}
