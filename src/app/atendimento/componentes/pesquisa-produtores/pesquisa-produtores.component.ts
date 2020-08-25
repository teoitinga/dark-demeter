import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ProdutorMin } from '../../models/produtor-min.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { AtedimentoService } from '../../atedimento.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'pesquisa-produtores',
  templateUrl: './pesquisa-produtores.component.html',
  styleUrls: ['./pesquisa-produtores.component.css']
})
export class PesquisaProdutoresComponent implements OnInit {

    
  controlProdutor: FormGroup;
    
  produtorFiltered$: Observable<ProdutorMin[]>;

  produtorSelecionado: Observable<ProdutorMin>;
  
  @Input() produtor: ProdutorMin;
  
  @Output() atualizouProdutor = new EventEmitter();

  constructor(
    private apiService: ApiService,
    private atedimentoService: AtedimentoService,
    private fb: FormBuilder

  ) {
    this.criarFormulario();
   }
  ngOnInit(): void {
  }
  criarFormulario() {
    this.controlProdutor = this.fb.group({
      cpf: ['', Validators.required],
      nome: ['', Validators.required]
    });

  }
  private _carregaProdutorApi() {

  }
  conferirCpf(){
    this.apiService.verificaRegistroPorCpf(this.controlProdutor.controls['cpf'].value).subscribe(
      data=>{
        this.configuraForm(data['nome'])
      },
      err=>{
        this.configuraForm('')

      }
    );
  }
  configuraForm(nomeDoProdutor){
    if(nomeDoProdutor){
      this.controlProdutor.controls['nome'].reset({ value: nomeDoProdutor, disabled: true });
      
    }else{
      this.controlProdutor.controls['nome'].reset({ value: '', disabled: false });
    }

  }
  selecionaProdutor(value){
    console.log("Produtor selecionado " + JSON.stringify(value));
    console.log("Produtor selecionado " + this.controlProdutor.controls['cpf'].value);
  }
  confirmaProdutor(){
    this.produtor = new ProdutorMin();
    this.produtor.nome = this.controlProdutor.controls['nome'].value;
    this.produtor.cpf = this.controlProdutor.controls['cpf'].value;
    this.atualizouProdutor.emit(this.produtor);
  }

  displayfn(value){
    return value?value.nome:value;
  }
}
