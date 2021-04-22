import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-preview',
  templateUrl: './images-preview.component.html',
  styleUrls: ['./images-preview.component.css']
})
export class ImagesPreviewComponent implements OnInit {

  @Input('image-list') imageList : { name : string, url : string }[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onImageDeleteClicked(imageUrl : string) {
    console.log(imageUrl);
    this.imageList = this.imageList.filter((image : { name : string, url : string }) => image.url !== imageUrl, 1);
  }

  fileBrowseHandler(event : Event) {
    let files = (event.target as HTMLInputElement).files; 

    if(files) {
      for(let i = 0; i < files.length; i++) {
        this.readURL(files[i]);
      }
    }
  }

  readURL(file : File) {
    let reader = new FileReader();
    let fileName = file.name;

    reader.readAsDataURL(file);

    reader.onload = (e) => {
      if(typeof(e.target?.result) === 'string')
        this.imageList.push({ name : fileName, url : e.target?.result });
    }
  }
}
