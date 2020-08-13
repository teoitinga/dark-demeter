import { HttpHeaders } from '@angular/common/http';
export const BASE_URL = 'http://localhost:8080/api/v1/';
export const TOKEN = "token";

//URL para autenticação de usuários
export const LOGIN_URL = BASE_URL + 'usuarios/auth';
//URL para obter lista de atendimentos
export const ATENDIMENTOS_URL = BASE_URL + 'tarefas';
//Header tokem
export const headersToken = new HttpHeaders({
 Authorization: 'Bearer ' + window.localStorage.getItem(TOKEN)
 });
//Header comum
export const headerCommon = new HttpHeaders({
 
 });
export const OPTIONS_OBJECTO = { headers: headersToken };

