import {Component, Input, OnInit} from '@angular/core';

import { Trip } from '../../../shared/models/trip.interface';
import { EmailSendingComponent } from '../../email-sending/email-sending.component';
import {AuthDialogComponent} from '../../../core/authentication/auth-dialog.component';
import {MatDialog} from '@angular/material';

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

  getDate(date: string) {
    return new Date(date);
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
