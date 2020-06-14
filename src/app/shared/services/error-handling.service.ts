import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private _snackBar: MatSnackBar) {}

  /**
   * Shows error message
   * @param message - string - Error message
   */
  showError(errorMsg: string = 'Something went wrong..!') {
    this.openSnackBar(errorMsg, 5000);
  }

  /**
   * Shows success message
   * @param message - string
   */
  showSuccess(message: string) {
    this.openSnackBar(message, 5000);
  }

  /**
   * Shows snack bar message
   * @param message - string
   * @param duration - number(miliseconds) - duration of auto close message
   */
  openSnackBar(message, duration = 2000) {
    this._snackBar.open(message, 'close', {
      duration: duration,
    });
  }
}
