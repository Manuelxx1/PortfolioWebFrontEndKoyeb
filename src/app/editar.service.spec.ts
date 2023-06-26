import { TestBed } from '@angular/core/testing';

import { EditarService } from './editar.service';

describe('EditarService', () => {
  let service: EditarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
