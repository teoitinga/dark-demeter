import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaTecnicoComponent } from './pesquisa-tecnico.component';

describe('PesquisaTecnicoComponent', () => {
  let component: PesquisaTecnicoComponent;
  let fixture: ComponentFixture<PesquisaTecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaTecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
