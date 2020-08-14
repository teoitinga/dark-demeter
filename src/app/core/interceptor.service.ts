import { Injectable, NgModule } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import * as AppUtils from '../shared/app.utils';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MessageService } from './message.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(
    private apiService: ApiService,
    private messageService: MessageService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage[AppUtils.TOKEN]
    let authReq: HttpRequest<any> = request;


    if (this.apiService.isLoggedIn()) {

      authReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
    }

    return next.handle(authReq)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {

    return throwError(error);

  }
  handleErroGeneral(error){
    
  }
  handleError303(error){

  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
})
export class Interceptor { }