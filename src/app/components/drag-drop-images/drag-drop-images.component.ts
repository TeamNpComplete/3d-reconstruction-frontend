import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop-images',
  templateUrl: './drag-drop-images.component.html',
  styleUrls: ['./drag-drop-images.component.css']
})
export class DragDropImagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public fileBrowseHandler(event : Event) {
    let files = (event.target as HTMLInputElement).files;
    console.log(files);
  }

}
