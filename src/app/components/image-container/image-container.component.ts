import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent implements OnInit {

  @Input('url') imageUrl = "assets/img/upload/upload_512.png";
  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    console.log('Delete Pressed !');
  }
}
