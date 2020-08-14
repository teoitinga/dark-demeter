import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CredencialModel } from 'src/app/models/credencial.model';
import { ApiService } from 'src/app/core/api.service';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/message.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {
  
  public submitted = false;
  private unSubscribleMessage = new Subject
  
  loginForm = new FormGroup({
    login: new FormControl(''),
    senha: new FormControl(''),
  });
  private unsubscribleMessage = new Subject();

  constructor(
    private apiService: ApiService,
    private messageService: MessageService,
    private router: Router
  ) { }
  ngOnDestroy(): void {
    this.unSubscribleMessage.next();
    this.unSubscribleMessage.complete();
  }

  ngOnInit(): void {
    this.messageService.notifyObservable$.pipe(takeUntil(this.unSubscribleMessage)).subscribe(
      result=>{
        if(result==true){
          this.submitted = false;
        }
      }
    );
  }
  logar(){
    this.submitted = true;
    const usuario: CredencialModel = this.loginForm.value;
    this.apiService.login(usuario).subscribe(
      data =>{
        this.loginSuccess(data);

      },
      err=>{

        console.log("Erro: " + JSON.stringify(err));
        
        if(err.status === 404){
          this.messageService.showError('Falha na autenticação', JSON.stringify(err.error.errors[0]));
          return;
        }

        this.messageService.showError('Falha na autenticação', JSON.stringify(err));
      }
    );

  }
  loginSuccess(data: any) {
    //registra o token no browser
    this.apiService.registerToken(data.token);
    let user: UsuarioModel = this.apiService.jwtDecode(data.token);
    this.router.navigate(['/atendimento']);

  }

}
