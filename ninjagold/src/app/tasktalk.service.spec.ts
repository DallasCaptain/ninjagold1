import { TestBed } from '@angular/core/testing';

import { TasktalkService } from './tasktalk.service';

describe('TasktalkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TasktalkService = TestBed.get(TasktalkService);
    expect(service).toBeTruthy();
  });
});
