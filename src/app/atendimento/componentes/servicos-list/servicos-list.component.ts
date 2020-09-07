import { Component, OnInit, Input } from '@angular/core';
import { ServicoModel } from 'src/app/models/servicos.model';

@Component({
  selector: 'servicos-list',
  templateUrl: './servicos-list.component.html',
  styleUrls: ['./servicos-list.component.css']
})
export class ServicosListComponent implements OnInit {
  
  @Input() servicos: ServicoModel[];// = [];//matriz de serviços pretados
  headElements = ['', 'Serviço',];
  constructor() { }

  ngOnInit(): void {
  }
  isempty():boolean{
    return this.servicos.length < 1 ? true : false;
  }
}
