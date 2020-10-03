import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEquipoComponent } from './select-equipo.component';

describe('SelectEquipoComponent', () => {
  let component: SelectEquipoComponent;
  let fixture: ComponentFixture<SelectEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
