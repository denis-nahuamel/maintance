import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCatalogoComponent } from './agregar-catalogo.component';

describe('AgregarCatalogoComponent', () => {
  let component: AgregarCatalogoComponent;
  let fixture: ComponentFixture<AgregarCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarCatalogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
