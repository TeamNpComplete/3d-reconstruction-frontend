import { trigger, transition, style, animate } from '@angular/animations';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReconstructionService } from 'src/app/services/reconstruction.service';

@Component({
  selector: 'app-images-preview',
  templateUrl: './images-preview.component.html',
  styleUrls: ['./images-preview.component.css'],
  animations: [
    trigger('fade', [      
      transition('void => *', [
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(500, style({opacity: 0}))
      ])
    ])
  ]
})
export class ImagesPreviewComponent implements OnInit {

  isLoggedIn: boolean = false;
  showLoginSignupModal: boolean = false;

  // Image Preview properties
  imageList : { name : string, url : string, file : File }[] = [];
  progress: number = 0;
  inProgress: boolean = false;
  
  // 3D model properties
  showModel: boolean = false;
  modelUrl: string = '';
  

  constructor(private reconstructionService: ReconstructionService) { }

  ngOnInit(): void {
  }

  onImageDeleteClicked(imageUrl : string) {
    this.imageList = this.imageList.filter((image : { name : string, url : string, file : File }) => image.url !== imageUrl, 1);
  }

  onAddFilesClicked() {
    document.getElementById('fileDropRef')?.click();
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
        this.imageList.push({ name : fileName, url : e.target?.result, file : file });
    }
  }

  onReconstructClicked() {
    const formData = new FormData();
    
    formData.append('userId', '123456');
    formData.append('modelName', 'Test2');

    for(let i = 0; i < this.imageList.length; i++) {
      formData.append("files", this.imageList[i].file, this.imageList[i].name);
    }

    this.inProgress = true;

    this.reconstructionService.getReconstructedModel(formData).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          if(event.total != null)
            this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('Done');
          let url = window.URL.createObjectURL(event.body);
          document.getElementById('closeModal')?.click();
          this.modelUrl = url;
          this.showModel = true;
        } else {
          console.log('Waiting !!!');
        }
      },

      (err) => {
        this.progress = 0;
        console.log("Failed to upload");
        console.log(err);
      },

      () => {
        this.inProgress = false;
      }
    )
  }

  onModelViewerClosed() {
    this.showModel = false;
    this.imageList = [];
  }

  checkLogInStatus() {
    if(!this.isLoggedIn) {
      this.showLoginSignupModal = true;
    }
  }

  intDivideBy3(i: number) {
    return Math.floor(i / 3);
  }
}
