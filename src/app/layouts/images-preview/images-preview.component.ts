import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-preview',
  templateUrl: './images-preview.component.html',
  styleUrls: ['./images-preview.component.css']
})
export class ImagesPreviewComponent implements OnInit {

  @Input('image-url-list') imageUrlList : string[] = [
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_128.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png',
    'assets/img/upload/upload_512.png'
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onImageDeleteClicked(imageUrl : string) {
    this.imageUrlList.splice(this.imageUrlList.indexOf(imageUrl), 1);
  }

}
