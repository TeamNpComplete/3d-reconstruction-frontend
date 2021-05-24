import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';

import { SavedModelsComponent } from './saved-models.component';

describe('SavedModelsComponent', () => {
  let component: SavedModelsComponent;
  let fixture: ComponentFixture<SavedModelsComponent>;
  let storageServiceMock: any = jasmine.createSpyObj('StorageService', ['getModelList', 'getModel', 'deleteModel']);
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
});
