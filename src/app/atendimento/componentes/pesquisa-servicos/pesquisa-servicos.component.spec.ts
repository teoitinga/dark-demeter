import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaServicosComponent } from './pesquisa-servicos.component';

describe('PesquisaServicosComponent', () => {
  let component: PesquisaServicosComponent;
  let fixture: ComponentFixture<PesquisaServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
