import { TestBed } from '@angular/core/testing';

import { FileExportServiceService } from './file-export-service.service';

describe('FileExportServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileExportServiceService = TestBed.get(FileExportServiceService);
    expect(service).toBeTruthy();
  });
});
