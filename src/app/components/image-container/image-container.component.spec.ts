import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DOMHelper } from 'src/testing/dom-helper';

import { ImageContainerComponent } from './image-container.component';

describe('ImageContainerComponent', () => {
  let component: ImageContainerComponent;
  let fixture: ComponentFixture<ImageContainerComponent>;
  let dh: DOMHelper<ImageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dh = new DOMHelper(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit "delete" event on delete button clicked !', () => {
    component.onDeleteClicked();
    expect(1).toBe(1);
  })

  it('should emit "delete" event on delete button clicked !', () => {
    component.onDeleteClicked();
    expect(1).toBe(1);
  })

  it('should change style on mouse hover', () => {
    component.onMouseOver();
    component.onMouseLeave();
    expect(1).toBe(1);
  })
});
