import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstants } from '../core/constants/api.constants';
import { GenericResponse } from '../shared/dto/genericResponse';
import { IRole } from './dto/role';
import { IUser } from './dto/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<GenericResponse<IUser[]>> {
    return this.http
      .get<GenericResponse<IUser[]>>(
        ApiConstants.generatePath(ApiConstants.USERS),
      );
  }

  createUser(request: any): Observable<GenericResponse<any>> {
    return this.http
      .post<GenericResponse<any>>(
        ApiConstants.generatePath(ApiConstants.USERS, ApiConstants.SAVE),
        request
      )
  }

  getRoles(): Observable<GenericResponse<IRole[]>> {
    return this.http
      .get<GenericResponse<IRole[]>>(
        ApiConstants.generatePath(ApiConstants.ROLES),
      );
  }

  getUserById(id: any): Observable<GenericResponse<IUser>> {
    return this.http
      .get<GenericResponse<IUser>>(
        ApiConstants.generatePath(ApiConstants.USERS, id),
      );
  }

  updateUser(request: any, id: any): Observable<GenericResponse<any>> {
    return this.http
      .post<GenericResponse<any>>(
        ApiConstants.generatePath(ApiConstants.USERS, ApiConstants.UPDATE, id),
        request
      )
  }
}
