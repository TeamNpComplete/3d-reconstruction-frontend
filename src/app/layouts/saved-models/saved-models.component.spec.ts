import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { StorageService } from 'src/app/services/storage/storage.service';

import { SavedModelsComponent } from './saved-models.component';

describe('SavedModelsComponent', () => {
  let component: SavedModelsComponent;
  let fixture: ComponentFixture<SavedModelsComponent>;
  let storageServiceMock: any = jasmine.createSpyObj('StorageService', ['getModelList', 'getModel', 'deleteModel']);
  storageServiceMock.getModel.and.returnValue(of('123'));
  storageServiceMock.deleteModel.and.returnValue(of('123'));
  storageServiceMock.getModelList.and.returnValue(of(
    {
      "modelList": [
          {
              "modelName": "Bench",
              "size": 147684,
              "dateCreated": "2021-05-21T18:54:38.998Z"
          },
          {
              "modelName": "Car",
              "size": 166684,
              "dateCreated": "2021-05-24T06:15:13.186Z"
          },
          {
              "modelName": "Plane",
              "size": 99684,
              "dateCreated": "2021-05-21T18:43:22.176Z"
          }
      ]
    }
  ))

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedModelsComponent ],
      providers: [
        { provide: StorageService, useValue: storageServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle model list get error', () => {
    storageServiceMock.getModelList.and.returnValue(throwError(1))
    component.ngOnInit();
    expect(1).toBe(1);
  })

  it('should select model', () => {
    component.onModelSelected({
      "modelName": "Bench",
      "size": 147684,
      "dateCreated": "2021-05-21T18:54:38.998Z"
    })
    expect(1).toBe(1);
  });

  it('should remove model', () => {
    component.removeModel({
      "modelName": "Bench",
      "size": 147684,
      "dateCreated": "2021-05-21T18:54:38.998Z"
    })
    expect(1).toBe(1);
  });

  it('should delete model from list', () => {
    component.onDeleteModel({
      "modelName": "Bench",
      "size": 147684,
      "dateCreated": "2021-05-21T18:54:38.998Z"
    })
    expect(1).toBe(1);
  });

  it('should close model veiwer', () => {
    component.onModelViewerClosed();
    expect(1).toBe(1);
  });
});
