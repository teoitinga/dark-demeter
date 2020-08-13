import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { AtedimentoService } from './atedimento.service';
import { AtendimentoListComponent } from '../components/atendimentos/atendimento-list/atendimento-list.component';


@NgModule({
  declarations: [
    AtendimentoListComponent
  ],
  imports: [
    CommonModule,
    AtendimentoRoutingModule
  ],
  providers:[
    AtedimentoService
  ]

})
export class AtendimentoModule { }
