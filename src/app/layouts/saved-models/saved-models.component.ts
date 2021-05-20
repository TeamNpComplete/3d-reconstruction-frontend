import { HttpEventType } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Model } from 'src/app/models/Model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-saved-models',
  templateUrl: './saved-models.component.html',
  styleUrls: ['./saved-models.component.css']
})
export class SavedModelsComponent implements OnInit {

  inProgress: boolean = false;
  modelUrl: string = '';
  modelName: string = '';
  showModel: boolean = false;

  data: Model[] = [];
  disabledRows: Model[] = [];
  displayedColumns: string[] = ['modelId', 'modelName', 'dateCreated', 'size', 'delete'];
  dataSource = new MatTableDataSource(this.data);

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.inProgress = true;

    this.storageService.getModelList().subscribe(
      (response) => {
        let modelList = response.modelList;
        modelList.forEach((model, index) => {
          model.modelId = index + 1;
          this.data.push(model);
        });

        this.updateTable();
        this.inProgress = false;
      }, 
      (err) => {
        console.log(err);
      }
    )
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  removeModel(model: Model) {
    this.disabledRows.splice(this.disabledRows.indexOf(model), 1);
    this.data.splice(this.data.indexOf(model), 1);
    this.updateTable();
  }

  updateTable() {
    this.dataSource.data = this.data;
  }

  onModelSelected(model: Model) {
    if(this.disabledRows.indexOf(model) !== -1)
      return;

    this.inProgress = true;
    this.storageService.getModel(model.modelName).subscribe(
      (event) => {
        if(event.type == HttpEventType.DownloadProgress) {
          if(event.total != null) {
            let progress = Math.round(100 * event.loaded / event.total);
            console.log(`Download Completed : ${progress} %`);
          }
        } else if (event.type == HttpEventType.Response) {
          console.log('Done');
          console.log(event.body);
          let url = window.URL.createObjectURL(event.body);
          this.modelUrl = url;
          this.modelName = model.modelName;
          this.showModel = true
        } else {
          console.log('Waiting ...')
        }
      }, 
      (err) => {
        console.log(err);
      },
      () => {
        this.inProgress = false;
      }
    )
  }

  onDeleteModel(model: Model) {
    this.disabledRows.push(model);

    this.storageService.deleteModel('123456', model.modelName).subscribe(
      (response) => {
        console.log(response);
      }, 
      (err) => {
        console.log(err);
        this.disabledRows.splice(this.disabledRows.indexOf(model), 1);
      },
      () => {
        this.removeModel(model);
      }
    )
  }

  onModelViewerClosed() {
    this.showModel = false;
  }
}
