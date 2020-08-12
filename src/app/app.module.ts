import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LogarComponent } from './components/auth/logar/logar.component';
import { AtendimentoListComponent } from './components/atendimentos/atendimento-list/atendimento-list.component';
import { AtendimentoRegisterComponent } from './components/atendimentos/atendimento-register/atendimento-register.component';
import { DocumentoEnviarComponent } from './components/documentos/documento-enviar/documento-enviar.component';
import { ProdutorRegisterComponent } from './components/produtor/produtor-register/produtor-register.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    LogarComponent
    
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    AuthModule,
    
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
