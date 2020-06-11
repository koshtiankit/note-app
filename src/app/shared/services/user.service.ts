import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private commonService: CommonService) {}

  /**
   * Gets all users
   * @returns users
   */
  getAllEmployees(name, data) {
    // return this.commonService.makePostRequest(
    //   ENDPOINTS.API + '/Generic/List/' + name,
    //   data
    // );
  }
  getAllUsers(body: any) {
    // return this.commonService.makePostRequest(
    //   ENDPOINTS.API + '/Generic/List/User',
    //   body
    // );
  }
  getPersons() {}
  /**
   * Gets user by id
   * @param id
   * @returns user by id
   */
  getUserById(id) {}

  /**
   * Adds user
   * @param user
   * @returns user
   */
  addUser(body: any) {}

  deleteUser(id: number) {}
  deleteMultipleUser(data: any) {}
}
