import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = sessionStorage.getItem("TOKEN");
    console.log(request);
    if (token) {
      const header = { Authorization: token };
      const cloneRequest: HttpRequest<any> = request.clone({
        setHeaders: header,
        ...request.body
      })
      return next.handle(cloneRequest);
    }
    return next.handle(request);
  }
}
