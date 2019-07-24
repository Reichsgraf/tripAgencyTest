import {Component, Input, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';

import { Trip } from '../../../shared/models/trip.interface';
import { EmailSendingComponent } from '../email-sending/email-sending.component';

@Component({
  selector: 'trips-item',
  styleUrls: ['trips-item.component.scss'],
  templateUrl: 'trips-item.component.html'
})
export class TripsItemComponent implements OnInit {
  image: string;
  mailTitle = 'Want to get more information on';
  mailMessage: string;

  @Input()
  trip: Trip;

  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.image = `url(${this.trip.imageUrl})`;
  }

  sendEmail() {
    const dialogRef = this.dialog.open(
      EmailSendingComponent, {
        width: '300px',
        data: { title: this.mailTitle, message: this.mailMessage }
      });
    dialogRef.afterClosed()
      .subscribe(mail => {
        if (!!mail) {
          console.log(mail);
        }
      });
  }
}
