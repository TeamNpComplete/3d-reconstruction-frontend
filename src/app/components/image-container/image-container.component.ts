import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent implements OnInit {

  @Output('delete') delete : EventEmitter<string> = new EventEmitter();
  @Input('url') imageUrl = "assets/img/upload/upload_512.png";
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClicked() {
    this.delete.emit(this.imageUrl);
  }
}
