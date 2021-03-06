import { Component} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from '../Model/cliente.mode';
import { Clientes } from '../Model/clientes.model';

import { ClienteService } from '../Services/cliente.service';
import { CobrancaService } from '../Services/cobranca.service';
import { DatePipe } from '@angular/common';
import { CustomSnackbarService } from '../Services/snack.service';


@Component({
  selector: 'cadastrocobranca',
  templateUrl: './cadastroCobranca.component.html',
  styleUrls: ['./cadastroCobranca.component.css'],
})

export class CadastroCobrancaComponent {
  public cobranca: FormGroup;
  public clientesResults: Array<Cliente> = new Array;
  public atualizarClientes$: any;
  public itens: any = [];
  public colSpinner: number = 0;
  public colIcon: number = 2;
  public hiddenSpinner: boolean = true;
  public iterableDiffer: any;


  ngOnInit() {
    this.getCobranca();
    this.atualizarClientes$ =
      this.clienteService.atualizarClientesEmiter.
      subscribe((result: any) => this.getCobranca());
  }

  public constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder,
    public datepipe: DatePipe,
    private cobrancaService: CobrancaService,
    private CustomSnackbarService: CustomSnackbarService,

  ) {

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

  public addItem() {
    const item = this.formBuilder.group({
      description: [null],
      quantity: [null],
      price: [null]
    })
    this.itens.push(item)
  };

  public removeItem(index: number) {
    this.itens.removeAt(index);
  };


  public myFilter = (d: Date | null): boolean => {
    const diasDoCalendario = (d || new Date());
    const diaAnterior = new Date();
    diaAnterior.setDate(diaAnterior.getDate() - 1);
    return diaAnterior < diasDoCalendario;
  };

  public getCobranca() {
      this.clienteService.getClientes()
      .subscribe(
        (clientes: Clientes) => { 
          this.clientesResults = clientes.results
        }
      )
  };

  public postCobranca() {
    const date = this.datepipe.transform(this.cobranca.get("dueDate")?.value, 'yyyy-MM-dd');
    this.cobranca.controls['dueDate'].setValue(date);

    this.cobrancaService.postCobranca(this.cobranca.value)
      .subscribe(
        (cobranca: any) => {
          this.cobranca.reset();
          this.CustomSnackbarService.open("Cobrança cadastrada com sucesso");
        }
      )
  };
}