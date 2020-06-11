import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorHandlingService } from './error-handling.service';

declare var ENDPOINTS;

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  menuList = [];

  menuData = [];

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private errorHandlingService: ErrorHandlingService
  ) {}

  public getCommonHeaders() {
    if (localStorage.getItem('currentUser') != null) {
      let authToken = JSON.parse(localStorage.getItem('currentUser')).Token;

      const _headers = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + authToken,
        }),
      };

      return _headers;
    } else {
      const _headers = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };

      return _headers;
    }
  }

  /**
   * Makes get request
   * @param urlSegment
   * @returns
   */

  makeGetRequest(urlSegment) {
    return this.http
      .get(urlSegment, this.getCommonHeaders())

      .pipe(catchError(this.handleError));
  }

  /**
   * Makes post request
   * @param urlSegment
   * @param data
   * @returns
   */

  makePostRequest(urlSegment, data) {
    return this.http
      .post(urlSegment, data, this.getCommonHeaders())
      .pipe(catchError(this.handleError));
  }

  /**
   * Makes put request
   * @param urlSegment
   * @param data
   * @returns
   */

  makePutRequest(urlSegment, data) {
    return this.http
      .put(urlSegment, data, this.getCommonHeaders())
      .pipe(catchError(this.handleError));
  }

  /**
   * Makes deleterequest
   * @param urlSegment
   * @returns
   */

  makeDeleteRequest(urlSegment) {
    return this.http
      .delete(urlSegment, this.getCommonHeaders())
      .pipe(catchError(this.handleError));
  }

  /**
   * Makes deleterequest
   * @param urlSegment
   * @param data - form data
   * @returns
   */

  postRequestWithFormData(urlSegment, data: FormData) {
    let headers = new HttpHeaders({
      Authorization:
        'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).Token,
    });

    return this.http
      .post(urlSegment, data, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  /**
   * Handles error
   * @param error
   * @returns throws error
   */

  handleError(error: any) {
    return throwError(error);
  }

  /**
   * Shows success message
   * @param message
   */

  showSuccessMessage(message: string) {
    this.openSnackBar(message, 5000);
  }

  openSnackBar(message, duration = 2000) {
    this._snackBar.open(message, 'close', {
      duration: duration,
    });
  }

  /**
   * Gets key value list (generic API for dropdown and autocomplete)
   * @returns
   */

  getKeyValueList(data): Observable<Object> {
    return this.makePostRequest(
      ENDPOINTS.API + '/Generic/GetKeyValueList',
      data
    );
  }

  setMenuValue(menu) {
    this.menuData = menu;
  }

  getMenuValue() {
    return this.menuData;
  }

  setMenus() {
    const KEYS_KEYVALUE = ['Menu'];
    this.getKeyValueList(KEYS_KEYVALUE).subscribe(
      (response: any) => {
        let result = response.Result;
        if (result) {
          this.menuList = result.Menu;
          this.saveMenuInfoToLocalStorage(this.menuList);
        }
      },
      (errors) => {
        this.errorHandlingService.showErrorDialog(errors.error.Message);
      }
    );
  }

  saveMenuInfoToLocalStorage(menuList) {
    try {
      //localStorage.setItem('menuList', 'true');
      localStorage.setItem('menuList', JSON.stringify(menuList));
    } catch (err) {
      //this.router.navigateByUrl('/login', { replaceUrl: true });
    }
  }

  getAllMenus() {
    return this.menuList;
  }
}
