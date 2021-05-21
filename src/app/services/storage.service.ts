import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConfiguration } from '../config/api.config';
import { Model } from '../models/Model';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    host: string = apiConfiguration.host;

    constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

    saveModel(data: FormData) {
        let requestUrl = this.host + apiConfiguration.storeModelRoute;

        let header: HttpHeaders = new HttpHeaders({
            'Authorization': `Bearer ${this.authenticationService.token}`
        });

        return this.http.post(requestUrl, data, {
            headers: header,
            reportProgress: true, 
            observe: 'events'
        });
    }

    getModel(modelName: string) {
        let requestUrl = this.host + apiConfiguration.retrieveModelRoute;

        let header: HttpHeaders = new HttpHeaders({
            'Authorization': `Bearer ${this.authenticationService.token}`
        });

        let queryParams = {
            modelName : modelName
        }

        return this.http.get(requestUrl, { 
            headers: header,
            params: queryParams, 
            observe: 'events',
            responseType: 'blob'
        });
    }

    getModelList() {
        let requestUrl = this.host + apiConfiguration.retrieveModelListRoute;

        let header: HttpHeaders = new HttpHeaders({
            'Authorization': `Bearer ${this.authenticationService.token}`
        });

        return this.http.get<{modelList : Model[]}>(requestUrl, { 
            headers: header
        });
    }

    deleteModel(modelName: string) {
        let requestUrl = this.host + apiConfiguration.deleteModelRoute;

        let header: HttpHeaders = new HttpHeaders({
            'Authorization': `Bearer ${this.authenticationService.token}`
        });

        let queryParams = {
            modelName : modelName
        }

        return this.http.delete(requestUrl, { 
            headers: header,
            params: queryParams 
        });
    }
}