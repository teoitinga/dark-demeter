import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
export const TOKEN = "token";

//URL para autenticação de usuários

export const LOGIN_URL = environment.BASE_API + 'usuarios/auth';
//URL para obter lista de atendimentos
export const ATENDIMENTOS_URL = environment.BASE_API + 'tarefas';

//URL para obter lista de serviços prestados
export const SERVICOS_URL = environment.BASE_API + 'services';

//URL para obter lista de tecnicos
export const TECNICOS_URL = environment.BASE_API + 'usuarios/authorized';

//URL para obter o produtor caso tenha registro de tecnicos
export const PRODUTOR_SEARCH_CPF_URL = environment.BASE_API + 'produtores';

//URL para obter o produtor caso tenha registro de tecnicos
export const ATENDIMENTOS_POST_URL = environment.BASE_API + 'tarefas';

//Header tokem
export const headersToken = new HttpHeaders({
 Authorization: 'Bearer ' + window.localStorage.getItem(TOKEN)
 });
//Header comum
export const headerCommon = new HttpHeaders({
 
 });
export const OPTIONS_OBJECTO = { headers: headersToken };

