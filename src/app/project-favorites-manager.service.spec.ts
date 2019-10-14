import { TestBed } from '@angular/core/testing';

import { ProjectFavoritesManagerService } from './project-favorites-manager.service';

describe('ProjectFavoritesManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectFavoritesManagerService = TestBed.get(ProjectFavoritesManagerService);
    expect(service).toBeTruthy();
  });
});
