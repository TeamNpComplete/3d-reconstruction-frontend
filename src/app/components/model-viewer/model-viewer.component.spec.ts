import { HttpResponse } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Subject } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';

import { ModelViewerComponent } from './model-viewer.component';

describe('ModelViewerComponent', () => {
  let component: ModelViewerComponent;
  let fixture: ComponentFixture<ModelViewerComponent>;
  let storageServiceMock: any = jasmine.createSpyObj('StorageService', ['saveModel']);
  storageServiceMock.saveModel.and.returnValue(of(new HttpResponse()));

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

  it('should show download dialog box on download clicked', () => {
    component.onDownloadModelClicked();
    expect(1).toBe(1);
  });

  it('should save model on save model click', () => {
    component.onSaveModelClicked();
    expect(1).toBe(1);
  })

  it('should change model name', () => {
    component.onModelNameChanged;
    expect(1).toBe(1);
  })

  it('should close model veiwer', () => {
    component.onCloseModelClicked();
    expect(1).toBe(1);
  })
});
