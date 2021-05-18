import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drag-drop-images',
  templateUrl: './drag-drop-images.component.html',
  styleUrls: ['./drag-drop-images.component.css']
})
export class DragDropImagesComponent implements OnInit {

  @Output('files-added') filesAdded : EventEmitter<Event> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fileBrowseHandler(event : Event) {
      this.filesAdded.emit(event);
  }

  onChooseImageClicked() {
    document.getElementById('fileDropRef')?.click();
  }
}
