import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Cliente } from '../Model/cliente.mode'

import { ClienteService } from '../Services/cliente.service'
import { CustomSnackbarService } from '../Services/snack.service'

@Component({
  selector: 'cadastrocliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent{
  public form: FormGroup;
  public checked = false;
  clientes: Cliente[] = [];



  public constructor(private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private CustomSnackbarService: CustomSnackbarService) {
    this.form = this.formBuilder.group({
      name: [null],
      email: [null],
      phoneNumber: [null],
      docNumber: [null],
      address: this.formBuilder.group({
        cep: [null],
        city: [null],
        area: [null],
        addressLine1: [null],
        uf: [null],
        streetNumber: [null],
      }),
    });
  }
  
  public cadastrarCliente() {
    
    this.clienteService.postCliente(this.form.value)
    .subscribe(
      (clientes: any) => {
          this.form.reset()
          this.CustomSnackbarService.open("Cadastro realizado, agora atualize a lista de clientes")
          console.log(clientes) 
        }
      )
  }

  
}