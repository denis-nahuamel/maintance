import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarComponenteComponent } from './agregar-componente.component';

describe('AgregarComponenteComponent', () => {
  let component: AgregarComponenteComponent;
  let fixture: ComponentFixture<AgregarComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
