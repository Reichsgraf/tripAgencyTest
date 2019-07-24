import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Email } from '../../../shared/models/email.interface';

@Component({
  selector: 'email-sending',
  styleUrls: ['email-sending.component.scss'],
  templateUrl: 'email-sending.component.html'
})
export class EmailSendingComponent {
  constructor(
    public dialogRef: MatDialogRef<EmailSendingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Email
  ) {}

  onCancelClick() {
    this.dialogRef.close();
  }
}
