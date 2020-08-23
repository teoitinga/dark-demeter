import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-atendimento-register',
  templateUrl: './atendimento-register.component.html',
  styleUrls: ['./atendimento-register.component.css']
})
export class AtendimentoRegisterComponent implements OnInit {
 
 
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

  }

}
