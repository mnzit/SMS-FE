import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstants } from '../core/constants/api.constants';
import { GenericResponse } from '../shared/dto/genericResponse';
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
}
