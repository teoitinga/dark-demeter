import { TecnicoModel } from './../../models/tecnicos.models';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { FormControl } from '@angular/forms';
  import { Observable } from 'rxjs';
  import { filter, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
  import { ApiService } from 'src/app/core/api.service';
  import { AtedimentoService } from '../../atedimento.service';
  
  @Component({
    selector: 'pesquisa-tecnico',
    templateUrl: './pesquisa-tecnico.component.html',
    styleUrls: ['./pesquisa-tecnico.component.css']
  })
  export class PesquisaTecnicoComponent implements OnInit {
    
    controltecnicos = new FormControl();
    
    tecnicosFiltered$: Observable<TecnicoModel[]>;
  
    tecnicoSelecionado: Observable<TecnicoModel>;
    
    @Input() tecnico: TecnicoModel;
    
    @Output() atualizouTecnico = new EventEmitter();

    constructor(
      private apiService: ApiService,
      private atedimentoService: AtedimentoService
  
    ) { }
  
    ngOnInit(): void {
  
      this._carregaTecnicosApi();
  
    }
  
    private _carregaTecnicosApi() {
      this.tecnicosFiltered$ = this.controltecnicos.valueChanges
        .pipe(
          filter(value => value.length > 1),
          debounceTime(200),
          distinctUntilChanged(),
          switchMap(value => this.apiService.getTecnicosForApi(value)),
          );
  
    }
   
    selecionaServico(value){
      console.log("Selecionando tecnico: " + value.nome);
      this.tecnicoSelecionado = (value);
      this.tecnico = value;
       //emitindo notificação para atualização de serviço
      this.atualizouTecnico.emit(this.tecnico)
  
    }
  
    displayfn(value){
      return value?value.nome:value;
    }
     
  }