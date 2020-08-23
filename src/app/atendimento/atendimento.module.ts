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

@NgModule({
  declarations: [
    AtendimentoListComponent,
    AtendimentoRegisterComponent,
    PesquisaServicosComponent,
    ServicosCadastroComponent
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,

    AtendimentoRoutingModule
  ],
  providers:[
    AtedimentoService,
    ApiService
  ]

})
export class AtendimentoModule { }
