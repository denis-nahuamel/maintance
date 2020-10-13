import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarIncidentesComponent } from './listar-incidentes.component';

describe('ListarIncidentesComponent', () => {
  let component: ListarIncidentesComponent;
  let fixture: ComponentFixture<ListarIncidentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarIncidentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarIncidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
