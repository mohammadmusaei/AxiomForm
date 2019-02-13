import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomFormComponent } from './axiom-form.component';

describe('AxiomFormComponent', () => {
  let component: AxiomFormComponent;
  let fixture: ComponentFixture<AxiomFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
