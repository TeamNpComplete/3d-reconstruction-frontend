import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { getTestBed, TestBed } from "@angular/core/testing";
import { apiConfiguration } from "src/app/config/api.config";
import { AuthenticationService } from "../authentication/authentication.service";
import { StorageService } from './storage.service';

describe('StorageService', () => {

    let injector: TestBed;
    let authenticationServiceMock: any = jasmine.createSpyObj('AuthenticationService', ['login', 'register', 'sendAuthenticationStatus'], ['token']);
    authenticationServiceMock.token = "";
    let storageService: StorageService;
    let httpMock: HttpTestingController; 

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                { provide: AuthenticationService, useValue: authenticationServiceMock }
            ]
        });
        injector = getTestBed();
        httpMock = injector.inject(HttpTestingController);
        storageService = injector.inject(StorageService);
    });

    it('should create', () => {
        expect(storageService).toBeTruthy();
    });


    it('should get model', () => {
        storageService.getModel('test').subscribe(
            (data) => {
                expect(1).toBe(1);
            } 
        );

        const req = httpMock.expectOne(apiConfiguration.host + apiConfiguration.retrieveModelRoute + '?modelName=test');
        expect(req.request.method).toBe("GET");
    });

    it('should get model list', () => {
        storageService.getModelList().subscribe(
            (data) => {
                expect(1).toBe(1);
            } 
        );

        const req = httpMock.expectOne(apiConfiguration.host + apiConfiguration.retrieveModelListRoute);
        expect(req.request.method).toBe("GET");
    });

    it('should save model', () => {
        storageService.saveModel(new FormData()).subscribe(
            (data) => {
                expect(1).toBe(1);
            } 
        );

        const req = httpMock.expectOne(apiConfiguration.host + apiConfiguration.storeModelRoute);
        expect(req.request.method).toBe("POST");
    });

    it('should delete model', () => {
        storageService.deleteModel('test').subscribe(
            (data) => {
                expect(1).toBe(1);
            } 
        );

        const req = httpMock.expectOne(apiConfiguration.host + apiConfiguration.retrieveModelRoute + '?modelName=test');
        expect(req.request.method).toBe("DELETE");
    });
});