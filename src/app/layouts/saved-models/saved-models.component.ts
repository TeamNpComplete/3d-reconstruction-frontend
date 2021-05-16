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

  inProgress : boolean = false;

  data: Model[] = [];
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
          model.modelId = index;
          this.data.push(model);
        });

        this.dataSource.data = this.data;
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

  onModelSelected(model: Model) {
    console.log(model);
  }

  onDeleteModel(model: Model) {
    console.log(model);
  }

}
