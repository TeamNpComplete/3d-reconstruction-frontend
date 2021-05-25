import { Component, Input, OnInit, Output } from '@angular/core';
import { Vector3 } from 'three';
import { MeshOptions } from 'angular-stl-model-viewer';
import { EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-model-viewer',
  templateUrl: './model-viewer.component.html',
  styleUrls: ['./model-viewer.component.css']
})
export class ModelViewerComponent implements OnInit {

  progress: number = 0;
  inProgress = false;
  modelName: string = '';

  isSaveDisabled: boolean = false;
  meshOptions: MeshOptions = {
    scale: new Vector3(0.08, 0.08, 0.08)
  }

  @Input('modelUrl') modelUrl: string = '';
  @Input('modelName') inputName: string = '';
  @Input('enableSave') enableSave: boolean = false;

  @Output('close') close: EventEmitter<void> = new EventEmitter();

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
  }

  onDownloadModelClicked() {
    let popUpBlocked = ('' + window.open).indexOf('[native code]') === -1;
    var anchor = document.createElement("a");
    anchor.download = `${this.inputName}.stl`;
    anchor.href = this.modelUrl;
    anchor.click();
    if(popUpBlocked) {
      alert('Allow pop-up to download !');
    }
  }

  async onSaveModelClicked() {
    this.isSaveDisabled = true;

    let data: FormData = new FormData();
    data.append('userId', '123456');
    data.append('modelName', this.modelName);

    let file = await fetch(this.modelUrl).then(r => r.blob()).then(blobFile => new File([blobFile], "model.stl", { type: "model/stl" }))
    data.append("file", file, file.name);

    document.getElementById('closeSaveModal')?.click();
    this.inProgress = true;
    this.storageService.saveModel(data).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          if(event.total != null)
            this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.inputName = this.modelName;
        }
      },

      (err) => {
        this.progress = 0;
      },

      () => {
        this.inProgress = false;
        this.isSaveDisabled = false;
      }
    );
  }

  onCloseModelClicked() {
    this.close.emit();
  }

  onModelNameChanged(event: Event) {
    let value = (<HTMLInputElement>event.target).value;
    this.modelName = value;
  }
}
