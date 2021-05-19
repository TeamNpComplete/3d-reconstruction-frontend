import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drag-drop-images',
  templateUrl: './drag-drop-images.component.html',
  styleUrls: ['./drag-drop-images.component.css']
})
export class DragDropImagesComponent implements OnInit {

  @Input('disabled') disabled: boolean = false;
  @Output('files-added') filesAdded : EventEmitter<Event> = new EventEmitter();
  @Output('click') click: EventEmitter<Event> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fileBrowseHandler(event : Event) {
      this.filesAdded.emit(event);
  }

  onChooseImageClicked(event : Event, fromInput: boolean = false) {
    event.stopPropagation()
    if(!this.disabled) {
      document.getElementById('fileDropRef')?.click();
    } else {
      this.click.emit(event);
    }
  }
}
