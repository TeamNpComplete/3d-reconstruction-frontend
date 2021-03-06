import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

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
    this.invalidCredentials = false;
    this.authenticationService.login(form.value.email, form.value.password).subscribe(
      (response: any) => {
        this.authenticationService.token = response['token'];
        this.authenticationService.sendAuthenticationStatus(true);
        this.close.emit();
        this.router.navigate(['/']);
      },
      (error) => {
        this.invalidCredentials = true;
      }
    );
  }

  onSignupSubmit(form: NgForm) {
    this.registrationFailed = false;
    this.authenticationService.register(form.value.name, form.value.email, form.value.password).subscribe(
      (response: any) => {
        this.authenticationService.token = response['token'];
        this.authenticationService.sendAuthenticationStatus(true);
        this.close.emit();
        this.router.navigate(['/']);
      },
      (error) => {
        this.registrationFailed = true;
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
