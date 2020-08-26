import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ServicoModel } from 'src/app/models/servicos.model';
import { AtendimentoServiceModel } from 'src/app/atendimento/models/atendimento-service.model';
import { ProdutorMin } from '../../models/produtor-min.model';
import { AtendimentoModel } from '../../models/atendimento-post.model';
import { ServicoPostModel } from '../../models/servico-post.model';
import { TecnicoModel } from '../../models/tecnicos.models';

@Component({
  selector: 'servicos-cadastro',
  templateUrl: './servicos-cadastro.component.html',
  styleUrls: ['./servicos-cadastro.component.css']
})
export class ServicosCadastroComponent implements OnInit {
  
  atendimento: AtendimentoServiceModel = new AtendimentoServiceModel();
  
  atendimentos: AtendimentoServiceModel[] = [];
  
  formServico: FormGroup;
  
  @Input() servico: ServicoModel;//variavel que recebe o serviço da seleção vinda da API
  //definições para atendimentos

  registro: AtendimentoModel;//atendimento de acorod com a API

  produtor: ProdutorMin;//produtor com dados mínimos a serem registrados
  servicoAtd: ServicoPostModel;//servico ou bojeto de atendimento devidamente preenchido
  tecnico: TecnicoModel;//servico ou bojeto de atendimento devidamente preenchido

  //matriz de atendimentos
  produtores: ProdutorMin[] = [];//matriz de produtores atendidos
  servicos: ServicoPostModel[] = [];//matriz de serviços pretados
  
  constructor(
    private fb: FormBuilder
  ) { 
    this.criarFormulario();

  }

  ngOnInit(): void {
    this.clearVars();
  }
  clearVars(){
    //certifica que as variaveis se manterão zeradas;
    this.produtores = [];
    this.servicos = [];
  }
  clearServices(){
    this.servicos = [];
  }
  clearProdutores(){
    this.produtores = [];
  }
  criarFormulario() {
    this.formServico = this.fb.group({
      descricao: [''],
      tempoNecessario: [{value: '', disabled: true}],
      emitiuArt: [''],
      emitiuDae: ['true'],
      valorDoDae: ['0'],
      valorDoProjeto: ['0'],
      createFolder: ['true']
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
    console.log('Atendimentos registrados: ' + JSON.stringify(this.registro));
  }
  
  enviarDados(){
    try{
      if(this.servico.legenda){
        this.atendimento = this.formServico.value;
        this.atendimento.codDoServico = this.servico.legenda;
        //this.atendimentos.push(this.atendimento);

        ///configura serviço presstado
        this.servicoAtd = new ServicoPostModel();
        this.servicoAtd.codDoServico = this.servico.legenda;
        this.servicoAtd.descricaoDoServico = this.formServico.controls['descricao'].value;
        this.servicoAtd.emitiuArt = this.formServico.controls['emitiuArt'].value;
        this.servicoAtd.emitiuDae = this.formServico.controls['emitiuDae'].value;
        this.servicoAtd.valorDoServico = this.formServico.controls['valorDoProjeto'].value;
        this.servicoAtd.valorDoDae = this.formServico.controls['valorDoDae'].value;

        this.servicos.push(this.servicoAtd);
        console.log('Matriz de serviços: ' + JSON.stringify(this.servicos));
      }
      
    }catch(err){
      console.log('err: ' + (err));
      console.log('Matriz de serviços com err: ' + JSON.stringify(this.servicos));

    }

  }
  onSelecionaServico(event){
    this.servico = event;
    this.atualizaFormulario();
    console.log(event);
  }
  onSelecionaTecnico(event){
    this.tecnico = event;
    console.log("Tecnico selecionado " + this.tecnico.nome);
  }
  onSelecionaProdutor(event){
    this.produtor = new ProdutorMin();
    this.produtor = event;
    console.log("Produtor a incluir " + JSON.stringify(this.produtor));
    this.produtores.push(this.produtor);
  }
  
}
