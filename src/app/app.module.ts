import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClienteComponent } from './Cliente/cliente.component';
import { NavBarComponent } from './NavBar/navbar.component';
import { CadastroCobrancaComponent } from './CadastroCobranca/cadastroCobranca.component';
import { CadastroClienteWrapperComponent } from './CadastroClienteWrapper/cadastroclientewrapper.component';
import { ListarCobrancaComponent } from './ListarCobranca/listarcobranca.component'

import { ClienteService } from './Services/cliente.service';
import { CustomSnackbarService } from './Services/snack.service';
import { CobrancaService } from './Services/cobranca.service'

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { NgxCurrencyModule, CurrencyMaskInputMode } from "ngx-currency";
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

export const customCurrencyMaskConfig: any = {
  align: "left",
  allowNegative: true,
  allowZero: false,
  decimal: ".",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    NavBarComponent,
    CadastroCobrancaComponent,
    CadastroClienteWrapperComponent,
    ListarCobrancaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    MatDividerModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatSnackBarModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    ClienteService,
    CustomSnackbarService,
    DatePipe,
    CobrancaService
  ],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
