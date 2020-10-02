import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoIncidenteComponent } from './equipo-incidente.component';

describe('EquipoIncidenteComponent', () => {
  let component: EquipoIncidenteComponent;
  let fixture: ComponentFixture<EquipoIncidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipoIncidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoIncidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
