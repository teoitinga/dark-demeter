import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InterceptorService } from './core/interceptor.service';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ApiService } from './core/api.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CabecalhoComponent

  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
      
    AppRoutingModule
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi : true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
