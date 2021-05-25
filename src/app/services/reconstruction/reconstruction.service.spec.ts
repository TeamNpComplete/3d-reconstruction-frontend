import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { getTestBed, TestBed } from "@angular/core/testing";
import { apiConfiguration } from "src/app/config/api.config";
import { AuthenticationService } from "../authentication/authentication.service";
import { ReconstructionService } from "./reconstruction.service";

describe('ReconstructionService', () => {

    let injector: TestBed;
    let authenticationServiceMock: any = jasmine.createSpyObj('AuthenticationService', ['login', 'register', 'sendAuthenticationStatus'], ['token']);
    authenticationServiceMock.token = "";
    let reconstructionService: ReconstructionService;
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
        reconstructionService = injector.inject(ReconstructionService);
    });

    it('should create', () => {
        expect(reconstructionService).toBeTruthy();
    });

    it('shoud send reconstruction post request', () => {
        reconstructionService.getReconstructedModel(new FormData()).subscribe(
            (data) => {
                expect(1).toBeTruthy(1);
            }
        );

        const req = httpMock.expectOne(apiConfiguration.host + apiConfiguration.reconstructionRoute);
        expect(req.request.method).toBe("POST");
    })

});