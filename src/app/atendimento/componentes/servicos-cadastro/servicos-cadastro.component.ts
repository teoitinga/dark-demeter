
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ServicoModel } from 'src/app/models/servicos.model';
import { AtendimentoServiceModel } from 'src/app/atendimento/models/atendimento-service.model';
import { ProdutorMin } from '../../models/produtor-min.model';
import { AtendimentoModel } from '../../models/atendimento-post.model';
import { ServicoPostModel } from '../../models/servico-post.model';
import { TecnicoModel } from '../../models/tecnicos.models';
import * as _moment from 'moment';
import { AtedimentoService } from '../../atedimento.service';

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'servicos-cadastro',
  templateUrl: './servicos-cadastro.component.html',
  styleUrls: ['./servicos-cadastro.component.css'],
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
  //filter do datepicker
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  //intervalo de datas a selecionar
  minDate: Date;
  maxDate: Date;

  constructor(
    private fb: FormBuilder,
    private atedimentoService: AtedimentoService
  ) {
    //Configura a data mínima para 01 de janeiro do ano corrente e a maior data, 20 de dezembro do ano atual
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear, 0, 1);
    this.maxDate = new Date(currentYear, 11, 20);
    this.criarFormulario();

  }

  ngOnInit(): void {
    this.clearVars();
  }
  clearVars() {
    //certifica que as variaveis se manterão zeradas;
    this.produtores = [];
    this.servicos = [];
  }
  clearServices() {
    this.servicos = [];
  }
  clearProdutores() {
    this.produtores = [];
  }
  criarFormulario() {
    this.formServico = this.fb.group({
      descricao: ['', Validators.required],
      tempoNecessario: [{ value: '', disabled: true }],
      emitiuArt: ['false'],
      emitiuDae: ['false'],
      valorDoDae: ['0'],
      valorDoProjeto: ['0'],
      createFolder: ['true'],
      recomendacoes: [''],
      dataAtendimento: [_moment([2017, 0, 1])]
    });
  }
  atualizaFormulario() {
    this.formServico.patchValue({
      descricao: [this.servico.descricao],
      tempoNecessario: [_moment().add(this.servico.tempoNecessario, 'days').format('DD/MM/YYYY')],
      valorDoDae: [this.servico.valorReferencia]
    });
  }
  registraAtendimento() {
    if (this.produtores.length > 0 && this.servicos.length > 0) {
      this.registro = new AtendimentoModel();
      this.registro.produtorInfo = this.produtores;
      this.registro.tipoServico = this.servicos;
      this.registro.recomendacoes = this.formServico.controls['recomendacoes'].value;

      this.registro.createFolder = this.formServico.controls['createFolder'].value;
      this.registro.dataDoAtendimento = this.formServico.controls['dataAtendimento'].value;
      this.registro.responsavel = this.tecnico.cpf;

      console.log('Atendimentos registrados: ' + JSON.stringify(this.registro));
      this.atedimentoService.sendAtendimentos(this.registro).subscribe(
        data=>{
          console.info("Sucesso: ")

        },
        err=>{
          console.error("Erro: " + err)
        }
      );
    }
  }
  incluirServico() {
    console.log('incluindo servico');
    try {
      if (this.servico.legenda) {
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

    } catch (err) {
      console.log('err: ' + (err));
      console.log('Matriz de serviços com err: ' + JSON.stringify(this.servicos));

    }

  }
  onSelecionaServico(event) {
    this.servico = event;
    this.atualizaFormulario();
    console.log(event);
  }
  onSelecionaTecnico(event) {
    this.tecnico = event;
    console.log("Tecnico selecionado " + this.tecnico.nome);
  }
  onSelecionaProdutor(event) {
    this.produtor = new ProdutorMin();
    this.produtor = event;
    console.log("Produtor a incluir " + JSON.stringify(this.produtor));
    this.produtores.push(this.produtor);
  }

}
