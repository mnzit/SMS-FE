import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericResponse } from 'src/app/shared/dto/genericResponse';

interface LoginRequest {
  emailAddress: string,
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(request: LoginRequest): Observable<GenericResponse<any>> {
    return this.http.post<GenericResponse<any>>("http://localhost:8080/sms/login",request)
  }
}
