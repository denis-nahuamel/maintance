import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoMantenimientoComponent } from './equipo-mantenimiento.component';

describe('EquipoMantenimientoComponent', () => {
  let component: EquipoMantenimientoComponent;
  let fixture: ComponentFixture<EquipoMantenimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipoMantenimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
