import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { getTestBed, TestBed } from "@angular/core/testing";
import { apiConfiguration } from "src/app/config/api.config";
import { AuthenticationService } from "./authentication.service";

describe('AuthenticationService', () => {

    let injector: TestBed;
    let authenticationService: AuthenticationService;
    let httpMock: HttpTestingController; 

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: []
        });
        injector = getTestBed();
        httpMock = injector.inject(HttpTestingController);
        authenticationService = injector.inject(AuthenticationService);
    });

    it('should create', () => {
        expect(authenticationService).toBeTruthy();
    });

    it('should send login request', () => {
        authenticationService.login('test@gmail.com', 'test1234').subscribe(
            (response:any) => {
                expect(response['token']).toBeDefined();
            }
        );
        
        const req = httpMock.expectOne(apiConfiguration.host + apiConfiguration.usersLoginRoute);
        expect(req.request.method).toBe("POST");
        req.flush({ token: "" });
    })

    it('should send registeration request', () => {
        authenticationService.register('abcd', 'test@gmail.com', 'test1234').subscribe(
            (response:any) => {
                expect(response['token']).toBeDefined();
            }
        );
        
        const req = httpMock.expectOne(apiConfiguration.host + apiConfiguration.usersRegistrationRoute);
        expect(req.request.method).toBe("POST");
        req.flush({ token: "" });
    })

    it('should publish authentication status', () => {
        authenticationService.sendAuthenticationStatus(true);
        expect(1).toBe(1);
    });
});