import { Component, OnInit } from '@angular/core';
import { AtendimentoRoutingModule } from 'src/app/atendimento/atendimento-routing.module';

import { AtedimentoService } from 'src/app/atendimento/atedimento.service';

@Component({
  selector: 'app-atendimento-list',
  templateUrl: './atendimento-list.component.html',
  styleUrls: ['./atendimento-list.component.css']
})
export class AtendimentoListComponent  implements OnInit {
  colunas:string[] = [
    "id", "Nome do produtor", "Data do Atendimento", "Descrição do atendimento", "Valor do serviço"
  ]

  atendimentos: AtendimentoRoutingModule[];
  constructor(
    private atedimentoService: AtedimentoService
  ){

  }
  ngOnInit() {
    this.obterAtendimentos();
  }
  obterAtendimentos(){
    return this.atedimentoService.getAtendimentos().subscribe(
      data=>{
        this.atendimentos = data;
      },
      err=>{
        console.log("erro: " + JSON.stringify(err));

      }
    );
  }
}