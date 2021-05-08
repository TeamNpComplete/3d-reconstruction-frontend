import { Component, Input, OnInit, Output } from '@angular/core';
import { Vector3 } from 'three';
import { MeshOptions } from 'angular-stl-model-viewer';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-model-viewer',
  templateUrl: './model-viewer.component.html',
  styleUrls: ['./model-viewer.component.css']
})
export class ModelViewerComponent implements OnInit {

  modelName: string = '';
  isSaveDisabled: boolean = false;
  meshOptions: MeshOptions = {
    scale: new Vector3(0.08, 0.08, 0.08)
  }

  @Input('modelUrl') modelUrl: string = '';
  @Input('enableSave') enableSave: boolean = false;

  @Output('close') close: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDownloadModelClicked() {
    let popUpBlocked = ('' + window.open).indexOf('[native code]') === -1;
    var anchor = document.createElement("a");
    anchor.download = "model.stl";
    anchor.href = this.modelUrl;
    anchor.click();
    if(popUpBlocked) {
      alert('Allow pop-up to download !');
    }
  }

  onSaveModelClicked() {
    console.log(this.modelName);
    this.isSaveDisabled = true;
    setTimeout(() => {
      document.getElementById('closeSaveModal')?.click();
      this.isSaveDisabled = false;
    }, 3000);
  }

  onCloseModelClicked() {
    this.close.emit();
  }

  onModelNameChanged(event: Event) {
    let value = (<HTMLInputElement>event.target).value;
    this.modelName = value;
  }
}
