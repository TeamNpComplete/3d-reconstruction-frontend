import { getTestBed, TestBed } from "@angular/core/testing";
import { TopBarService } from "./top-bar.service";

describe('TopBarService', () => {

    let injector: TestBed;
    let topBarService: TopBarService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ });
        injector = getTestBed();
        topBarService = injector.inject(TopBarService);
    });

    it('should create', () => {
        expect(topBarService).toBeTruthy();
    });
});