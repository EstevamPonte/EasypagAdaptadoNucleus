import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Cliente } from '../Model/cliente.mode'

import { ClienteService } from '../Services/cliente.service'

@Component({
  selector: 'cadastrocliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent implements OnInit {
  public form: FormGroup;
  public checked = false;
  public novoCliente: Cliente;
  clientes: Cliente[] = [];

  ngOnInit() {
    this.obterClientes();
  }

  public constructor(private formBuilder: FormBuilder, private clienteService: ClienteService) {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      cpfcnpj: [null, [Validators.required]],
      cep: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      uf: [null, [Validators.required]],
      logradouro: [null, [Validators.required]],
      numero: [null, [Validators.required]],
      bairro: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
      email: [null, [Validators.required]]
    });

    this.novoCliente = new Cliente(
      '',
      '',
      '',
      '',
      {
        cep: '',
        uf: '',
        city: '',
        area: '',
        addressLine1: '',
        streetNumber: ''
      })
  }
  
  public cadastrarCliente() {
    this.novoCliente.name = this.form.get('name')?.value
    this.novoCliente.email = this.form.get('email')?.value
    this.novoCliente.phoneNumber = this.form.get('telefone')?.value
    this.novoCliente.docNumber = this.form.get('cpfcnpj')?.value
    this.novoCliente.address.cep = this.form.get('cep')?.value
    this.novoCliente.address.city = this.form.get('cidade')?.value
    this.novoCliente.address.area = this.form.get('bairro')?.value
    this.novoCliente.address.addressLine1 = this.form.get('logradouro')?.value
    this.novoCliente.address.uf = this.form.get('uf')?.value
    this.novoCliente.address.streetNumber = this.form.get('numero')?.value
    
    console.log(this.novoCliente)
    this.clienteService.criarCliente(this.novoCliente)
  }

  public obterClientes() {
    this.clienteService.getClientes()
      .subscribe(
        (clientes: Cliente[]) => {
          this.clientes = clientes
        }
      )
  }
  
}