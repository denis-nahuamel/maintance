import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDocenteComponent } from './agregar-docente.component';

describe('AgregarDocenteComponent', () => {
  let component: AgregarDocenteComponent;
  let fixture: ComponentFixture<AgregarDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
