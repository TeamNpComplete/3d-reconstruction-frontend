import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropImagesComponent } from './drag-drop-images.component';

describe('DragDropImagesComponent', () => {
  let component: DragDropImagesComponent;
  let fixture: ComponentFixture<DragDropImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
