import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstants } from 'src/app/core/constants/api.constants';

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

  login(request: LoginRequest) {
    return this.http
      .post<any>(
        ApiConstants.generatePath(ApiConstants.LOGIN),
        request,
        {observe: 'response'}
      );
  }

}
