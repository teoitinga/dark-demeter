import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { AtedimentoService } from './atedimento.service';
import { AtendimentoListComponent } from '../components/atendimentos/atendimento-list/atendimento-list.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AtendimentoRegisterComponent } from '../components/atendimentos/atendimento-register/atendimento-register.component';
import { ApiService } from '../core/api.service';
import { PesquisaServicosComponent } from './componentes/pesquisa-servicos/pesquisa-servicos.component';
import { ServicosCadastroComponent } from './componentes/servicos-cadastro/servicos-cadastro.component';
import { ServicosListComponent } from './componentes/servicos-list/servicos-list.component';
import { PesquisaTecnicoComponent } from './componentes/pesquisa-tecnico/pesquisa-tecnico.component';
import { IconsModule } from 'angular-bootstrap-md';
import { PesquisaProdutoresComponent } from './componentes/pesquisa-produtores/pesquisa-produtores.component';
import { SharedModule } from '../shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
// MDB Angular Free
import { InputsModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { ListaProdutoresComponent } from './componentes/lista-produtores/lista-produtores.component'
@NgModule({
  declarations: [
    AtendimentoListComponent,
    AtendimentoRegisterComponent,
    PesquisaServicosComponent,
    ServicosCadastroComponent,
    ServicosListComponent,
    PesquisaTecnicoComponent,
    PesquisaProdutoresComponent,
    ListaProdutoresComponent
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    SharedModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    InputsModule,
    WavesModule,
    ButtonsModule,

    AtendimentoRoutingModule
  ],
  providers:[
    AtedimentoService,
    ApiService
  ]

})
export class AtendimentoModule { }
