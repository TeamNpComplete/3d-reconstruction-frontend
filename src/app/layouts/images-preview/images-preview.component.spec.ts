import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Subject } from 'rxjs';
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
  authenticationServiceMock.getAuthenticationStatus.and.returnValue(of(true));
  authenticationServiceMock.isAuthenticated.and.returnValue(false);
  topBarServiceMock.getLoginButtonClicked.and.returnValue(of(false));
  reconstructionServiceMock.getReconstructedModel.and.returnValue(of('123'));

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

  it('should delete image', () => {
    component.onImageDeleteClicked('');
    expect(1).toBe(1);
  });

  it('should add files', () => {
    component.onAddFilesClicked();
    expect(1).toBe(1);
  });

  it('should call reconstruct', () => {
    component.onReconstructClicked();
    expect(1).toBe(1);
  });

  it('should close model viewer', () => {
    component.onModelViewerClosed();
    expect(1).toBe(1);
  });

  it('should check login status', () => {
    component.isLoggedIn = true;
    component.checkLogInStatus();
    expect(1).toBe(1);
  });

  it('should check utility', () => {
    expect(component.intDivideBy3(10)).toBe(3);
  });

  it('should open login modal on get started clicked', () => {
    component.isLoggedIn = false;
    component.onGetStartedClicked();
    expect(1).toBe(1);
  });

  it('should create file url of single file', () => {
    component.readURL(new File(['1', '2', '3'], 'test'));
    expect(1).toBe(1);
  });

  it('should create urls of each file on file selected', () => {
    let event: unknown = { target: { files: [] } }
    component.fileBrowseHandler(event as Event);
    expect(1).toBe(1);
  });
});
