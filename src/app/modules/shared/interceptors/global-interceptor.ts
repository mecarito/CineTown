import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  req!: HttpRequest<any>;

  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + environment.access_token,
      },
    });
    return next.handle(this.req);
  }
}
