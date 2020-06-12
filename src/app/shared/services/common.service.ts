import { Injectable, EventEmitter } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageService } from './error-handling.service';

declare var ENDPOINTS;

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  menuList = [];

  menuData = [];

  constructor(
    private _snackBar: MatSnackBar,
    private errorHandlingService: MessageService
  ) {}

  handleError(error: any) {
    return throwError(error);
  }

  saveMenuInfoToLocalStorage(menuList) {
    try {
      //localStorage.setItem('menuList', 'true');
      localStorage.setItem('menuList', JSON.stringify(menuList));
    } catch (err) {
      //this.router.navigateByUrl('/login', { replaceUrl: true });
    }
  }
}
