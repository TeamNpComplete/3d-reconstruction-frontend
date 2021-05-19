import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-signup-modal',
  templateUrl: './login-signup-modal.component.html',
  styleUrls: [
    './login-signup-modal.component.css',
    '../../../../src/assets/scss/argon.scss'
  ]
})
export class LoginSignupModalComponent implements OnInit {

  email!: String;
  password!: String;
  invalidCredentials: Boolean = false;
  registrationFailed: Boolean = false;

  @Input('tab') tab: string = 'login';
  @Output('close') close: EventEmitter<void> = new EventEmitter();

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() { }

  ngOnDestroy() { }

  onLoginSubmit(form: NgForm) {
    console.log(form.value);
    this.invalidCredentials = false;
    let loginSubscription = this.authenticationService.login(form.value.email, form.value.password).subscribe(
      (response: any) => {
        this.authenticationService.token = response['token'];
        console.log('Authentication Successful !');
        console.log(response);
        this.authenticationService.sendAuthenticationStatus(true);
        loginSubscription.unsubscribe();
        console.log(this.authenticationService.isAuthenticated());
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.invalidCredentials = true;
        console.log('Authentication Failed !');
        console.log(error);
        loginSubscription.unsubscribe();
      }
    );
  }

  onSignupSubmit(form: NgForm) {
    console.log(form.value);
    this.registrationFailed = false;
    let registrationSubscription = this.authenticationService.register(form.value.name, form.value.email, form.value.password).subscribe(
      (response: any) => {
        this.authenticationService.token = response['token'];
        console.log('Registration Successful !');
        console.log(response);
        this.authenticationService.sendAuthenticationStatus(true);
        registrationSubscription.unsubscribe();
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.registrationFailed = true;
        console.log('Registration Failed !');
        registrationSubscription.unsubscribe();
        console.log(error);
      }
    )
  }

  changeTab() {
    if(this.tab === 'login') {
      this.tab = 'signup';
    } else {
      this.tab = 'login';
    }
  }

  onBackdropClicked() {
    this.close.emit();
  }

}
