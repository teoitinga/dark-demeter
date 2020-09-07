import { HttpHeaders } from '@angular/common/http';
export const BASE_URL = 'http://localhost:4200/api/v1/';
export const TOKEN = "token";

//URL para autenticação de usuários
export const LOGIN_URL = BASE_URL + 'usuarios/auth';
//URL para obter lista de atendimentos
export const ATENDIMENTOS_URL = BASE_URL + 'tarefas';

//URL para obter lista de serviços prestados
export const SERVICOS_URL = BASE_URL + 'services';

//URL para obter lista de tecnicos
export const TECNICOS_URL = BASE_URL + 'usuarios/authorized';

//URL para obter o produtor caso tenha registro de tecnicos
export const PRODUTOR_SEARCH_CPF_URL = BASE_URL + 'produtores';

//URL para obter o produtor caso tenha registro de tecnicos
export const ATENDIMENTOS_POST_URL = BASE_URL + 'tarefas';

//Header tokem
export const headersToken = new HttpHeaders({
 Authorization: 'Bearer ' + window.localStorage.getItem(TOKEN)
 });
//Header comum
export const headerCommon = new HttpHeaders({
 
 });
export const OPTIONS_OBJECTO = { headers: headersToken };

