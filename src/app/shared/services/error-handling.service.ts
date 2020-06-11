import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {
  constructor(private _snackBar: MatSnackBar) {}

  /**
   * Shows error dialog
   * @param [errorMsg] - string - Error message
   */
  showErrorDialog(errorMsg: string = 'Something went wrong..!') {
    this.openSnackBar(errorMsg, 5000);
  }

  openSnackBar(message, duration = 2000, onClickClose?) {
    if (onClickClose) {
      this._snackBar.open(message, 'close');
    } else {
      this._snackBar.open(message, 'close', {
        duration: duration,
      });
    }
  }
}
