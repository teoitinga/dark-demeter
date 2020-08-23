import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosCadastroComponent } from './servicos-cadastro.component';

describe('ServicosCadastroComponent', () => {
  let component: ServicosCadastroComponent;
  let fixture: ComponentFixture<ServicosCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicosCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
