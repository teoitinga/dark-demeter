import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { startWith, map, take, tap, filter, distinctUntilChanged, debounceTime, switchMap, takeLast } from 'rxjs/operators';
import { ServicoModel } from 'src/app/models/servicos.model';
import { ApiService } from 'src/app/core/api.service';
import { AtendimentoServiceModel } from '../../models/atendimento-service.model';

@Component({
  selector: 'app-pesquisa-servicos',
  templateUrl: './pesquisa-servicos.component.html',
  styleUrls: ['./pesquisa-servicos.component.css']
})
export class PesquisaServicosComponent implements OnInit {

  formularioDeServicos: FormGroup;

  controlservicos = new FormControl();
  
  servicosFiltered$: Observable<ServicoModel[]>;

  servicoSelecionado: ServicoModel;
  
  //atendimentos a registrar no banco de dados
  atendimentoedefinir: AtendimentoServiceModel;

  @ViewChild('#servicoSelecionado')
  servicoSel: Observable<ServicoModel>;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this._criarFormulario();
    this._carregaServicosApi();

  }

  private _carregaServicosApi() {
    this._filter();
        
  }
  private _filter(){
    this.servicosFiltered$ = this.controlservicos.valueChanges
      .pipe(
        filter(value => value.length > 3),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(value => this.apiService.getServicesForApi(value)),
        );
  }

  private _criarFormulario() {
    this.formularioDeServicos = this.fb.group({
      descricaodoservico: ['***'],
      valordoprojeto: ['0'],
      dae: ['0'],
    });
  }

  displayfn(subject){
    return subject?subject.descricao:undefined;
  }
}