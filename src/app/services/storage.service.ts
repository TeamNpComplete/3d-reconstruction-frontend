import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConfiguration } from '../config/api.config';
import { Model } from '../models/Model';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    host: string = apiConfiguration.storageHost;

    constructor(private http: HttpClient) { }

    saveModel(data: FormData) {
        let requestUrl = this.host + apiConfiguration.reconstructionRoute;

        return this.http.post(requestUrl, data, {
            reportProgress: true, 
            observe: 'events'
        });
    }

    getModel(modelName: string, userId: string = '123456') {
        let requestUrl = this.host + apiConfiguration.retrieveModelRoute;

        let queryParams = {
            userId : userId,
            modelName : modelName
        }

        return this.http.get(requestUrl, { 
            params: queryParams, 
            observe: 'events',
            responseType: 'blob'
        });
    }

    getModelList(userId: string = '123456') {
        let requestUrl = this.host + apiConfiguration.retrieveModelListRoute;

        let queryParams = {
            userId : userId
        }

        return this.http.get<{modelList : Model[]}>(requestUrl, { params: queryParams });
    }

    deleteModel(userId: string, modelName: string) {
        let requestUrl = this.host + apiConfiguration.deleteModelRoute;

        let queryParams = {
            userId : userId,
            modelName : modelName
        }

        return this.http.delete(requestUrl, { params: queryParams });
    }
}