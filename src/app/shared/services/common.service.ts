import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private router: Router, private location: Location) {}

  public handleError(error: any) {
    return throwError(error);
  }

  /**
   * Encodes base64 string
   * @param str
   * @returns  encoded base64 string
   */
  public encodeBase64(str: any) {
    return btoa(str);
  }

  /**
   * Decodes base64 string
   * @param str
   * @returns  decoded value from base64 string
   */
  public decodeBase64(str: any) {
    return atob(str);
  }

  /**
   * redirect to given url
   * @param url - given url
   */
  public redirectToUrl(url) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigateByUrl(url));
  }

  /**
   * append url parameters
   * @param param - param name
   * @param paramValue - param value
   */
  public appendURLParameters(param, paramValue) {
    const urlParameters = `?${param}=${paramValue}`;
    this.location.replaceState(this.router.url + `${urlParameters}`);
  }
}
