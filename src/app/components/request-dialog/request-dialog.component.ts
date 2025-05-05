import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material-module/material/material.module';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-dialog',
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './request-dialog.component.html',
  styleUrl: './request-dialog.component.scss',
})
export class RequestDialogComponent {
  public requestDescription = '';

  constructor(private dialogRef: MatDialogRef<RequestDialogComponent>) {}

  public submitRequest(): void {
    console.log('Request:', this.requestDescription);
    this.dialogRef.close();
  }

  public close(): void {
    this.dialogRef.close();
  }
}
