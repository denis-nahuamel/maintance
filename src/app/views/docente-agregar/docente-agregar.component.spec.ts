import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteAgregarComponent } from './docente-agregar.component';

describe('DocenteAgregarComponent', () => {
  let component: DocenteAgregarComponent;
  let fixture: ComponentFixture<DocenteAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocenteAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
