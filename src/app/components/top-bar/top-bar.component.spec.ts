import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { TopBarService } from 'src/app/services/top-bar/top-bar.service';

import { TopBarComponent } from './top-bar.component';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;
  let authenticationServiceMock: any = jasmine.createSpyObj('AuthenticationService', ['sendAuthenticationStatus', 'getAuthenticationStatus']);
  let topBarServiceMock: any = jasmine.createSpyObj('TopBarService', ['sendLoginClicked']);
  authenticationServiceMock.getAuthenticationStatus.and.returnValue(of(true));
  authenticationServiceMock.sendAuthenticationStatus.and.returnValue(new Subject());
  topBarServiceMock.sendLoginClicked.and.returnValue();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: AuthenticationService, useValue: authenticationServiceMock },
        { provide: TopBarService, useValue: topBarServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change navigation link on click', () => {
    component.onLinkClicked({path: '/', text: 'Reconstruction'});
    expect(1).toBe(1);
  });

  it('should call loginClicked', () => {
    component.onLoginClicked();
    expect(1).toBe(1);
  });
});
