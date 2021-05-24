import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StorageService } from 'src/app/services/storage.service';

import { ModelViewerComponent } from './model-viewer.component';

describe('ModelViewerComponent', () => {
  let component: ModelViewerComponent;
  let fixture: ComponentFixture<ModelViewerComponent>;
  let storageServiceMock: any = jasmine.createSpyObj('StorageService', ['saveModel']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelViewerComponent ],
      providers: [ 
        { provide: StorageService, useValue: storageServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
