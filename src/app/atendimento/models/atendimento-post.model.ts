import { ProdutorMin } from './produtor-min.model';
import { ServicoModel } from 'src/app/models/servicos.model';

export interface AtendimentoModel {
    createFolder: boolean;
    dataDoAtendimento: string;
    produtorInfo: ProdutorMin[];
    recomendacoes: string;
    responsavel: string;
    tipoServico: ServicoModel[];
  }