import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormControl, FormBuilder } from '@angular/forms';
import { Observable, BehaviorSubject, } from 'rxjs';
import { tap, filter, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { ServicoModel } from 'src/app/models/servicos.model';
import { ApiService } from 'src/app/core/api.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { AtedimentoService } from '../../atedimento.service';

@Component({
  selector: 'pesquisa-servicos',
  templateUrl: './pesquisa-servicos.component.html',
  styleUrls: ['./pesquisa-servicos.component.css']
})
export class PesquisaServicosComponent implements OnInit {
  
  @Input('atendimento') atendimento: string = '';

  controlservicos = new FormControl();
  
  servicosFiltered$: Observable<ServicoModel[]>;

  servicoSelecionado: Observable<ServicoModel>;
  
  @Input() servico: ServicoModel;
  
  @Output() atualizouServico = new EventEmitter();

  constructor(
    private apiService: ApiService,
    private atedimentoService: AtedimentoService

  ) { }

  ngOnInit(): void {

    this._carregaServicosApi();

  }

  private _carregaServicosApi() {
    this.servicosFiltered$ = this.controlservicos.valueChanges
      .pipe(
        filter(value => value.length > 2),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(value => this.apiService.getServicesForApi(value)),
        );

  }
 
  selecionaServico(value){
    console.log("Selecionando serviço: " + value.descricao);
    this.servicoSelecionado = (value);
    this.servico = value;//new BehaviorSubject(value);
    this.atedimentoService.setServico(this.servico);
    
    //emitindo notificação para atualização de serviço
    this.atualizouServico.emit(this.servico)

  }

  displayfn(value){
    return value?value.descricao:value;
  }
   
}