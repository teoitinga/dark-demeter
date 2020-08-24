import { Component, OnInit, Input } from '@angular/core';
import { ProdutorMin } from '../../models/produtor-min.model';

@Component({
  selector: 'lista-produtores',
  templateUrl: './lista-produtores.component.html',
  styleUrls: ['./lista-produtores.component.css']
})
export class ListaProdutoresComponent implements OnInit {
  
  @Input() produtores: ProdutorMin[] = [];//matriz de produtores atendidos
  headElements = ['Nome do produtor atendido', ''];
  constructor() { }
  
  ngOnInit(): void {
  }

}
