import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Contato } from './contato';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ContatoService {
  salvarContatoUrl = 'https://thorbio.azurewebsites.net/api/SalvarContato?code=5DO3NtnIIwstpTsvWB3Pp30qsdeaJWap2BMiyflImm6LWgxYQJmERQ==';  // URL to web api
  private handleError: HandleError;
  partitionKey: string;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ContatoService');
  }

  salvarContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.salvarContatoUrl, contato, httpOptions)
    .pipe(catchError(this.handleError('salvarContato', contato)));
  }
}
