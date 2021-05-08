import { Component, Input, OnInit } from '@angular/core';
import { Vector3 } from 'three';
import { MeshOptions } from 'angular-stl-model-viewer';

@Component({
  selector: 'app-model-viewer',
  templateUrl: './model-viewer.component.html',
  styleUrls: ['./model-viewer.component.css']
})
export class ModelViewerComponent implements OnInit {

  meshOptions: MeshOptions = {
    scale: new Vector3(0.08, 0.08, 0.08)
  }

  @Input('modelUrl') modelUrl:string = '';

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

  }

}
