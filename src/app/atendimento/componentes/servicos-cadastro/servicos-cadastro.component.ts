import { ApiService } from 'src/app/core/api.service';
import { filter, tap, map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServicoModel } from 'src/app/models/servicos.model';
import { AtendimentoServiceModel } from 'src/app/atendimento/models/atendimento-service.model';

@Component({
  selector: 'servicos-cadastro',
  templateUrl: './servicos-cadastro.component.html',
  styleUrls: ['./servicos-cadastro.component.css']
})
export class ServicosCadastroComponent implements OnInit {
  
  atendimento: AtendimentoServiceModel = new AtendimentoServiceModel();
  
  atendimentos: AtendimentoServiceModel[] = [];
  
  @Input() servico: ServicoModel;
  
  formServico: FormGroup;
  
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
  }
  criarFormulario() {
    this.formServico = this.fb.group({
      descricao: [''],
      tempoNecessario: [''],
      emitiuArt: [''],
      emitiuDae: [''],
      valorDoDae: [''],
      valorDoProjeto: ['']
    });
  }
  atualizaFormulario() {
    this.formServico.patchValue({
      descricao: [this.servico.descricao],
      tempoNecessario: [this.servico.tempoNecessario],
      valorDoDae: [this.servico.valorReferencia]
    });
  }
  registraAtendimento(){
    console.log('Atendimentos registrados: ' + JSON.stringify(this.atendimento));
  }
  
  enviarDados(){
    this.atendimento = this.formServico.value;
    this.atendimento.codDoServico = this.servico.legenda;

    console.log('Atendimento registrado>>>: ' + JSON.stringify(this.atendimento));

  }
  onSelecionaServico(event){
    console.log("Atualizando servico emiter: " + event.descricao);
    this.servico = event;
    this.atualizaFormulario();
//    this.selecionouServico.emit(this.servico);
    console.log(event);
  }
  
}
