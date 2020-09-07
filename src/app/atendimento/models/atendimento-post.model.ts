import { ProdutorMin } from './produtor-min.model';
import { ServicoModel } from 'src/app/models/servicos.model';
import { ServicoPostModel } from './servico-post.model';

export class AtendimentoModel {
    createFolder: boolean;
    dataDoAtendimento: string;
    produtorInfo: ProdutorMin[];
    recomendacoes: string;
    responsavel: string;
    tipoServico: ServicoPostModel[];
  }