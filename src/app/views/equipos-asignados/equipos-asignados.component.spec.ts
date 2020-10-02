import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposAsignadosComponent } from './equipos-asignados.component';

describe('EquiposAsignadosComponent', () => {
  let component: EquiposAsignadosComponent;
  let fixture: ComponentFixture<EquiposAsignadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposAsignadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposAsignadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
