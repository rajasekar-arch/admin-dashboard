import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  public success(message: string, duration = 3000): void {
    this.show(message, 'snackbar-success', duration);
  }

  public error(message: string, duration = 3000): void {
    this.show(message, 'snackbar-error', duration);
  }

  public info(message: string, duration = 3000): void {
    this.show(message, 'snackbar-info', duration);
  }

  public warn(message: string, duration = 3000): void {
    this.show(message, 'snackbar-warn', duration);
  }

  public show(message: string, panelClass: string, duration = 3000, action = 'Close'): void {
    this.snackBar.open(message, action, {
      duration,
      horizontalPosition: 'end',
      verticalPosition: 'bottom', // Change to 'top' if needed
      panelClass: [panelClass],
    });
  }
}
