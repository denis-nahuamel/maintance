import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarcargafinComponent } from './asignarcargafin.component';

describe('AsignarcargafinComponent', () => {
  let component: AsignarcargafinComponent;
  let fixture: ComponentFixture<AsignarcargafinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarcargafinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarcargafinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
