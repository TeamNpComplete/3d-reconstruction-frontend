import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConfiguration } from '../config/api.config';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root'
})
export class ReconstructionService {

    host: string = apiConfiguration.host;

    constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

    getReconstructedModel(data: FormData) {
        let requestUrl = this.host + apiConfiguration.reconstructionRoute;

        let header: HttpHeaders = new HttpHeaders({
            'Authorization': `Bearer ${this.authenticationService.token}`
        });

        return this.http.post(requestUrl, data, {
            headers: header,
            reportProgress: true, 
            observe: 'events',
            responseType: 'blob'
        });
    }
}