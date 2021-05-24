import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ReconstructionService } from 'src/app/services/reconstruction.service';
import { TopBarService } from 'src/app/services/top-bar.service';

import { ImagesPreviewComponent } from './images-preview.component';

describe('ImagesPreviewComponent', () => {
  let component: ImagesPreviewComponent;
  let fixture: ComponentFixture<ImagesPreviewComponent>;
  let reconstructionServiceMock: any = jasmine.createSpyObj('ReconstructionService', ['getReconstructedModel']);
  let authenticationServiceMock: any = jasmine.createSpyObj('AuthenticationService', ['sendAuthenticationStatus', 'getAuthenticationStatus', 'isAuthenticated']);
  let topBarServiceMock: any = jasmine.createSpyObj('TopBarService', ['sendLoginClicked', 'getLoginButtonClicked']);
  authenticationServiceMock.getAuthenticationStatus.and.returnValue(of(false));
  authenticationServiceMock.isAuthenticated.and.returnValue(false);
  topBarServiceMock.getLoginButtonClicked.and.returnValue(of(false));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesPreviewComponent ],
      providers: [
        { provide: ReconstructionService, useValue: reconstructionServiceMock },
        { provide: AuthenticationService, useValue: authenticationServiceMock },
        { provide: TopBarService, useValue: topBarServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
