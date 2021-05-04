import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Response } from '../response';
import { CredentialsService } from '../authentication/credentials.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private toastr: ToastrService,
    private credentialService: CredentialsService,
    private router: Router,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Response>> {
    return next.handle(request).pipe(
      map((response) => this.responseMapper(response)),
      catchError((error) => this.errorHandler(error))
    );
  }

  responseMapper(response: HttpEvent<any>) {
    if (response instanceof HttpResponse && response.body && response.body.success !== undefined && !response.body.success) {
      throw response.body;
    }
    return response;
  }

  errorHandler(response: HttpEvent<Response>): Observable<HttpEvent<Response>> {
    console.error('Request error', response);
    if (response instanceof HttpErrorResponse) {
      const code = (response.error && response.error.code) || response.status;

      if (code) {
        switch (code) {

          case 401:
            this.credentialService.logOut();
            this.router.navigate(['login'])
        }
      } else {
        if (response.error.message) {
          this.toastr.error(response.error.message)
        } else {
          this.toastr.error("System error")
        }
      }
      throw response.error;
    }
    throw response;
  }
}
