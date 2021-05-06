import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstants } from 'src/app/core/constants/api.constants';
import { GenericResponse } from '../dto/genericResponse';
import { UserAttendanceHistory } from '../dto/user-attendance-history';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http: HttpClient) {
  }

  saveAttendance(userId: string): Observable<GenericResponse<any>> {
    return this.http
      .get<GenericResponse<any>>(
        ApiConstants.generatePath(ApiConstants.ATTENDANCE, ApiConstants.SAVE, userId),
      );
  }

  getUserAttendanceHistory(userId:string): Observable<GenericResponse<UserAttendanceHistory>> {
    return this.http
    .get<GenericResponse<UserAttendanceHistory>>(
      ApiConstants.generatePath(ApiConstants.ATTENDANCE, ApiConstants.USERS, userId),
    );
  }
}
