import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CredencialModel } from 'src/app/models/credencial.model';
import { ApiService } from 'src/app/core/api.service';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  loginForm = new FormGroup({
    login: new FormControl(''),
    senha: new FormControl(''),
  });

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }
  logar(){
    const usuario: CredencialModel = this.loginForm.value;
    this.apiService.login(usuario).subscribe(
      data =>{
        this.loginSuccess(data);

      },
      err=>{
        console.error("Erro de autenticação");
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
