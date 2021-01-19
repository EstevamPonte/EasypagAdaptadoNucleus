import { Component, OnInit, ViewChild } from '@angular/core'
import { CobrancaService } from '../Services/cobranca.service'
import {PageEvent} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomSnackbarService } from '../Services/snack.service'

@Component({
  selector: 'listarcobranca',
  templateUrl: './listarcobranca.component.html',
  styleUrls: ['./listarcobranca.component.css']
})

export class ListarCobrancaComponent implements OnInit{
  public dataSource: MatTableDataSource<any> = new MatTableDataSource()
  public displayedColumns: string[] = ['name', 'dueDate', 'phoneNumber', 'email', 'status', "cpf/cnpj",'actions'];
  public resultsLength: number = 0;
  public limit: number = 2
  public page: number = 1
  public pdf: any = ''
  public pdfUrl: any
  // public disableCancel: boolean = false

  public constructor(private cobrancaService: CobrancaService, private snack: CustomSnackbarService)  {

  }

  ngOnInit() {
    this.getBoletos()
  }

  getBoletos() {
    this.cobrancaService.getCobranca(this.limit, this.page)
    .subscribe(
      (boleto: any) => {
        this.resultsLength = boleto.count
        this.limit = boleto.limit
        this.dataSource = boleto.results
      }
    )
  }

  deleteBoleto(id: string) {
    this.cobrancaService.deleteCobranca(id)
      .subscribe(
        (resultado: any) => {
          this.snack.open("Boleto cancelado com sucesso")
          this.getBoletos()
        }
      )
  }

  viewBoleto(id: string) {
    this.cobrancaService.viewBoleto(id)
      .subscribe(
        (resultado: any) => {
          this.pdfUrl = URL.createObjectURL(resultado);
          window.open(this.pdfUrl, '_blank');
        },
        (error) => {
          console.log(error )
        }
        )      
  }

  updatePage(event?: PageEvent) {
    if (event?.pageIndex) {
      this.page = event?.pageIndex + 1
      this.getBoletos()
    }else {
      this.page = this.page - 1
      this.getBoletos()
    }
  }

  returnMask(cpfcnpj: string) {
    if(cpfcnpj.length === 14){
      return "00.000.000/0000-00"
    } else {
      return "000.000.000-00"
    }
  }
}