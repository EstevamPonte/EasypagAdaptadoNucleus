import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CobrancaComponent } from './Cobranca/cobranca.component'

const routes: Routes = [
  {
    path: 'cobranca',
    component: CobrancaComponent
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
