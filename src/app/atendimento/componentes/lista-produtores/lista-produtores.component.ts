import { Component, OnInit, Input } from '@angular/core';
import { ProdutorMin } from '../../models/produtor-min.model';

@Component({
  selector: 'lista-produtores',
  templateUrl: './lista-produtores.component.html',
  styleUrls: ['./lista-produtores.component.css']
})
export class ListaProdutoresComponent implements OnInit {
  
  @Input() produtores: ProdutorMin[] = [];//matriz de produtores atendidos
  headElements = ['','Produtor atendido'];
  constructor() { }
  
  ngOnInit(): void {
  }
  isempty():boolean{
    return this.produtores.length < 1 ? true : false;
  }
}
