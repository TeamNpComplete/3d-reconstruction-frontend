import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { LoginSignupModalComponent } from './login-signup-modal.component';

describe('LoginSignupModalComponent', () => {
  let component: LoginSignupModalComponent;
  let fixture: ComponentFixture<LoginSignupModalComponent>;
  let authenticationServiceMock: any = jasmine.createSpyObj('AuthenticationService', ['login', 'register', 'sendAuthenticationStatus']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSignupModalComponent ],
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        { provide : AuthenticationService, useValue: authenticationServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSignupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
