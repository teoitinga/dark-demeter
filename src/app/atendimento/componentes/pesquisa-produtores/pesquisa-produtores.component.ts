import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ProdutorMin } from '../../models/produtor-min.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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
  }
  ngOnInit(): void {
    this.criarFormulario();
  }
  criarFormulario() {
    this.controlProdutor = this.fb.group({
      cpf: ['', Validators.required],
      nome: [{ value: '', disabled: false }, Validators.required]
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
    if(!this.controlProdutor.invalid){
      this.produtor = new ProdutorMin();
      this.produtor.nome = this.controlProdutor.controls['nome'].value;
      this.produtor.cpf = this.controlProdutor.controls['cpf'].value;
      this.atualizouProdutor.emit(this.produtor);
      this.clearForm();
      this.produtor = null;
    }
  }
  clearForm(){
    this.controlProdutor.controls['nome'].reset({ value: '', disabled: false });
    this.controlProdutor.controls['cpf'].reset({ value: '', disabled: false });
  }
  displayfn(value){
    return value?value.nome:value;
  }
}
