import { TestBed } from '@angular/core/testing';

import { AxiomFormService } from './axiom-form.service';

describe('AxiomFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AxiomFormService = TestBed.get(AxiomFormService);
    expect(service).toBeTruthy();
  });
});
