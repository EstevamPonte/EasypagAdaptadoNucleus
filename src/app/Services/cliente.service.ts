import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cliente } from '../Model/cliente.mode'
import { Observable, throwError } from 'rxjs';
import { Clientes } from "../Model/clientes.model";


@Injectable()
export class ClienteService {
  public headers = new HttpHeaders()
  readonly apiURL = 'http://localhost:4200/api/v1/customers'
  
  public constructor (private http: HttpClient) {
    const basicAuth = "yRpWoIJiw7peZ3jqDuz9JfLg9bl0h4nQ:jpg3517nc8J3uU3kPbrKfI3NwxuEpYwNI6piaFnu"

    this.headers = this.headers.append('Authorization', 'Basic ' + btoa(basicAuth))
  }


  postCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiURL, cliente, { headers: this.headers })
      
  }

  getClientes(): Observable<Clientes> {
    
    return this.http.get<Clientes>(this.apiURL, { headers: this.headers })
      
  }
}