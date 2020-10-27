import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoComponentesComponent } from './equipo-componentes.component';

describe('EquipoComponentesComponent', () => {
  let component: EquipoComponentesComponent;
  let fixture: ComponentFixture<EquipoComponentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipoComponentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
