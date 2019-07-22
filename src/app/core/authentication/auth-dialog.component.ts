import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { User } from '../../shared/models/user.interface';

@Component({
  selector: 'auth-dialog',
  styleUrls: ['auth-dialog.component.scss'],
  templateUrl: 'auth-dialog.component.html'
})
export class AuthDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AuthDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  onCancelClick() {
    this.dialogRef.close();
  }
}
