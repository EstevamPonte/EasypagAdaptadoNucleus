import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'cobranca',
  templateUrl: './cobranca.component.html',
  styleUrls: ['./cobranca.component.css']
})

export class CobrancaComponent {
  public form: FormGroup;
  public checked = false;

  public constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      cpfcnpj: [null, [Validators.required]],
      cep: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      uf: [null, [Validators.required]],
      logradouro: [null, [Validators.required]],
      numero: [null, [Validators.required]],
      complemento: [null, [Validators.required]],
    });
  }

  public cadastrarCobranca() {
    console.log(this.form.get('name')?.value)
    console.log(this.form.get('cpfcnpj')?.value)
  }
  
}