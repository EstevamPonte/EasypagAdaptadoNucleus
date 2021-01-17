import { Component } from '@angular/core'
import { FormArray, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'cadastrocobranca',
  templateUrl: './cadastroCobranca.component.html',
  styleUrls: ['./cadastroCobranca.component.css']
})

export class CadastroCobrancaComponent{

  cobranca = new FormGroup({
    itens: new FormArray([
      new FormGroup({
        descricao: new FormControl(''),
        preco: new FormControl(''),
        quantidade: new FormControl('')
      })
    ]),
  })

  itens = this.cobranca.get('itens') as FormArray;
  addItem() {
    const item = new FormGroup({
        descricao: new FormControl(''),
        preco: new FormControl(''),
        quantidade: new FormControl
      })
    

    this.itens.push(item)  
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
}