import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstants } from '../core/constants/api.constants';
import { GenericResponse } from '../shared/dto/genericResponse';
import { ICourse } from './dto/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {
  }

  getCourses(): Observable<GenericResponse<ICourse[]>> {
    return this.http
      .get<GenericResponse<ICourse[]>>(
        ApiConstants.generatePath(ApiConstants.COURSES),
      );
  }
}
