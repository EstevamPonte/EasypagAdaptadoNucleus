import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroClienteWrapperComponent } from './CadastroClienteWrapper/cadastroclientewrapper.component'
import { ListarCobrancaComponent } from './ListarCobranca/listarcobranca.component'

const routes: Routes = [
  {
    path: 'cobranca',
    component: CadastroClienteWrapperComponent
  },
  {
    path: 'listarcobranca',
    component: ListarCobrancaComponent
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
