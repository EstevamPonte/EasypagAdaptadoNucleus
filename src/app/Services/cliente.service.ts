import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cliente } from '../Model/cliente.mode'
import { Observable, throwError } from 'rxjs';


@Injectable()
export class ClienteService {
  public constructor (private http: HttpClient) {
  }
  readonly apiURL = 'https://sandbox.easypag.com.br/api/v1/customers'

  criarCliente(cliente: Cliente) {
    this.http.post(this.apiURL, cliente)
      .subscribe(
        resultado => {
          console.log(resultado)
        },
        error => {
          console.log(error)
        }
      )
  }

  // obterClientes() {
  //   this.http.get(this.apiURL)
  //     .subscribe(
  //       resultado => {
  //         console.log(resultado)
  //       },
  //       error => {
  //         console.log(error)
  //       }
  //     )
  // }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiURL)
      
  }
}