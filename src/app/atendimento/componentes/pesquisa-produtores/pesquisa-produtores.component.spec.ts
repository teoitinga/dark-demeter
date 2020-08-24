import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaProdutoresComponent } from './pesquisa-produtores.component';

describe('PesquisaProdutoresComponent', () => {
  let component: PesquisaProdutoresComponent;
  let fixture: ComponentFixture<PesquisaProdutoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaProdutoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaProdutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
