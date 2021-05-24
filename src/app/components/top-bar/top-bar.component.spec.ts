import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TopBarService } from 'src/app/services/top-bar.service';

import { TopBarComponent } from './top-bar.component';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;
  let authenticationServiceMock: any = jasmine.createSpyObj('AuthenticationService', ['sendAuthenticationStatus', 'getAuthenticationStatus']);
  let topBarServiceMock: any = jasmine.createSpyObj('TopBarService', ['sendLoginClicked']);
  authenticationServiceMock.getAuthenticationStatus.and.returnValue(of(false));

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
});
