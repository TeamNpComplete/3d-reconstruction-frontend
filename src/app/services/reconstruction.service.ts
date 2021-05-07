import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConfiguration } from '../config/api.config';

@Injectable({
    providedIn: 'root'
})
export class ReconstructionService {

    host: string = apiConfiguration.host;

    constructor(private http: HttpClient) { }

    getReconstructedModel(data: FormData) {
        let requestUrl = this.host + apiConfiguration.reconstructionRoute;

        return this.http.post(requestUrl, data, {
            reportProgress: true, 
            observe: 'events',
            responseType: 'blob'
        });
    }
}