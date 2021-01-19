import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cobranca } from '../Model/cobranca.model'
import { Observable } from 'rxjs';

@Injectable()
export class CobrancaService {
  public headers = new HttpHeaders()
  public params = new HttpParams()  
  readonly apiURL = 'http://localhost:4200/api/v1/invoices'

  public constructor (private http: HttpClient) {

    const basicAuth = "yRpWoIJiw7peZ3jqDuz9JfLg9bl0h4nQ:jpg3517nc8J3uU3kPbrKfI3NwxuEpYwNI6piaFnu"

    this.headers = this.headers.append('Authorization', 'Basic ' + btoa(basicAuth))
  }
  
  postCobranca(cobranca: Cobranca): Observable<Cobranca> {
    return this.http.post<Cobranca>(this.apiURL, cobranca, { headers: this.headers })
  }
  
  getCobranca(limit:number, page: number): Observable<any> {
    let currentPage = page.toString()
    let currentLimit = limit.toString()

    return this.http.get(this.apiURL, { headers: this.headers, params: {limit: currentLimit, page: currentPage} })
  }

  deleteCobranca(id: string): Observable<Object> {
    return this.http.post(`${this.apiURL}/${id}/cancel`, { headers: this.headers }, { headers: this.headers })
  }

  viewBoleto(id: string): Observable<Object>{
    return this.http.get(`${this.apiURL}/${id}/view/boleto`, { headers: this.headers, responseType: 'blob' })
  }
}