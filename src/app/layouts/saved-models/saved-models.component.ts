import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Model } from 'src/app/models/Model';

@Component({
  selector: 'app-saved-models',
  templateUrl: './saved-models.component.html',
  styleUrls: ['./saved-models.component.css']
})
export class SavedModelsComponent implements OnInit {

  data: Model[] = [
    { modelId : 1, modelName : 'Model 1', size: parseFloat(Math.random().toFixed(2)), dateCreated : '12-08-2020'},
    { modelId : 2, modelName : 'Model 2', size: parseFloat(Math.random().toFixed(2)), dateCreated : '12-08-2020'},
    { modelId : 3, modelName : 'Model 3', size: parseFloat(Math.random().toFixed(2)), dateCreated : '12-08-2020'},
    { modelId : 4, modelName : 'Model 4', size: parseFloat(Math.random().toFixed(2)), dateCreated : '12-08-2020'},
    { modelId : 5, modelName : 'Model 5', size: parseFloat(Math.random().toFixed(2)), dateCreated : '12-08-2020'},
    { modelId : 6, modelName : 'Model 6', size: parseFloat(Math.random().toFixed(2)), dateCreated : '12-08-2020'}
  ];

  displayedColumns: string[] = ['modelId', 'modelName', 'dateCreated', 'size', 'delete'];
  dataSource = new MatTableDataSource(this.data);

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {

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
