import { Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Cliente } from '../Model/cliente.mode'
import { Clientes } from '../Model/clientes.model'

import { ClienteService } from '../Services/cliente.service'
import { CobrancaService } from '../Services/cobranca.service'
import { DatePipe } from '@angular/common';
import { CustomSnackbarService } from '../Services/snack.service';


@Component({
  selector: 'cadastrocobranca',
  templateUrl: './cadastroCobranca.component.html',
  styleUrls: ['./cadastroCobranca.component.css'],
})

export class CadastroCobrancaComponent implements OnInit{
  public cobranca: FormGroup
  public clientesResults: Array<Cliente> = new Array;
  public itens: any = []
  public colSpinner: number = 0
  public colIcon: number = 2
  public hiddenSpinner: boolean = true

  ngOnInit() {
    this.obterClientes(true, 2, 0)

  }
  
  public constructor (
    private clienteService:ClienteService,
    private formBuilder: FormBuilder,
    public datepipe: DatePipe,
    private cobrancaService: CobrancaService,
    private CustomSnackbarService: CustomSnackbarService
    ){
    
    this.cobranca = this.formBuilder.group({
      customer: this.formBuilder.group({
        id: [null]
      }),
      dueDate: [null],
      items: new FormArray([
        this.formBuilder.group({
          description: [null],
          quantity: [null],
          price: [null]
        })
      ]),
    })
    this.itens = this.cobranca.get('items') as FormArray;
  }
  
  addItem() {
    const item = this.formBuilder.group({
      description: [null],
      quantity: [null],
      price: [null]
    })
    
    this.itens.push(item)
    console.log(this.itens.length)

  }
  
  removeItem(index: number) {
    this.itens.removeAt(index)
  }


  myFilter = (d: Date | null): boolean => {
    const diasDoCalendario = (d || new Date())
    const diaAnterior = new Date()
    diaAnterior.setDate(diaAnterior.getDate() - 1)
    return diaAnterior < diasDoCalendario;
  }

  public obterClientes(hiddenSpinner: boolean, colIcon: number, colSpinner: number) {
    this.colIcon = colIcon
    this.colSpinner = colSpinner
    this.hiddenSpinner = hiddenSpinner
    this.clienteService.getClientes()
      .subscribe(
        (clientes: Clientes) => { 
          this.clientesResults = clientes.results
          console.log(this.clientesResults)
          this.colIcon = 2
          this.colSpinner = 0
          this.hiddenSpinner = true
        }
      )
  }

  public criarCobranca() {
    const date = this.datepipe.transform(this.cobranca.get("dueDate")?.value, 'yyyy-MM-dd');
    this.cobranca.controls['dueDate'].setValue(date)

    this.cobrancaService.postCobranca(this.cobranca.value)
      .subscribe(
        (cobranca: any) => {
          this.cobranca.reset()
          this.CustomSnackbarService.open("Cobrança cadastrada com sucesso")
          console.log(cobranca)
        }
      )
    console.log(this.cobranca.value)
  }
}