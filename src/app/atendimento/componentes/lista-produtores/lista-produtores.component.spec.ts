import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdutoresComponent } from './lista-produtores.component';

describe('ListaProdutoresComponent', () => {
  let component: ListaProdutoresComponent;
  let fixture: ComponentFixture<ListaProdutoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProdutoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProdutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
