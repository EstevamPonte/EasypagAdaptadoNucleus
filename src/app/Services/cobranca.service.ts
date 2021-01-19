import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cobranca } from '../Model/cobranca.model'
import { Observable, throwError } from 'rxjs';

@Injectable()
export class CobrancaService {
  public headers = new HttpHeaders()
  readonly apiURL = 'http://localhost:4200/api/v1/invoices'

  public constructor (private http: HttpClient) {

    const basicAuth = "yRpWoIJiw7peZ3jqDuz9JfLg9bl0h4nQ:jpg3517nc8J3uU3kPbrKfI3NwxuEpYwNI6piaFnu"

    this.headers = this.headers.append('Authorization', 'Basic ' + btoa(basicAuth))
  }

  postCobranca(cobranca: Cobranca): Observable<Cobranca> {
    return this.http.post<Cobranca>(this.apiURL, cobranca, { headers: this.headers })
  }
}