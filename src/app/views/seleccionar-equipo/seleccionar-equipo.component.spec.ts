import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarEquipoComponent } from './seleccionar-equipo.component';

describe('SeleccionarEquipoComponent', () => {
  let component: SeleccionarEquipoComponent;
  let fixture: ComponentFixture<SeleccionarEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionarEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
