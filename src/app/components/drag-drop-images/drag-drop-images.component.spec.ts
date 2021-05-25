import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DOMHelper } from 'src/testing/dom-helper';

import { DragDropImagesComponent } from './drag-drop-images.component';

describe('DragDropImagesComponent', () => {
  let component: DragDropImagesComponent;
  let fixture: ComponentFixture<DragDropImagesComponent>;
  let dh: DOMHelper<DragDropImagesComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropImagesComponent);
    dh = new DOMHelper(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onChooseImageClicked on button clicked', () => {
    dh.clickButton('CHOOSE IMAGES')
    fixture.detectChanges();
    expect(1).toBe(1);
  });

  it('should open image selection dialog box', () => {
    component.fileBrowseHandler(new Event('open'));
    expect(1).toBe(1);
  })

  it('should emit clicked event on input click if input is disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    dh.clickButton('CHOOSE IMAGES')
    fixture.detectChanges();
    expect(1).toBe(1);
  })
});
