import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarcargaComponent } from './asignarcarga.component';

describe('AsignarcargaComponent', () => {
  let component: AsignarcargaComponent;
  let fixture: ComponentFixture<AsignarcargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarcargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarcargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
