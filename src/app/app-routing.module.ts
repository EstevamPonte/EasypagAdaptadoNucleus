import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './Cliente/cliente.component'
import { CadastroCobrancaComponent } from './CadastroCobranca/cadastroCobranca.component'
import { CadastroClienteWrapperComponent } from './CadastroClienteWrapper/cadastroclientewrapper.component'

const routes: Routes = [
  {
    path: 'cobranca',
    component: CadastroClienteWrapperComponent
  },
  {
    path: '',
    redirectTo: 'cobranca',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
