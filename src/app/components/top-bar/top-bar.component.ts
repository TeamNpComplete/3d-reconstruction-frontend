import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit, OnDestroy {

  isAuthenticated : boolean = false;
  authenticationServiceSubscription !: Subscription;

  activeLink: { text: string, path: string} = { text: '', path: '' };
  links: Array<{text: string, path: string}> = [
    { text: 'Reconstruction', path: '/reconstruct' },
    { text: 'Saved Models', path: '/saved' }
  ];
  
  constructor(private router: Router, private authenticationService : AuthenticationService) { 

  }

  ngOnInit(): void {
    this.activeLink = this.links[0];
    this.getAuthenticationStatus();
  }

  ngOnDestroy(): void {
    this.authenticationServiceSubscription.unsubscribe();
  }

  onLinkClicked(link: { text: string, path: string }) {
    this.activeLink = link;
  }

  getAuthenticationStatus() {
    this.authenticationServiceSubscription = this.authenticationService.authenticationStatus.subscribe(
      (res: boolean) => {
        this.isAuthenticated = res;
      }
    )
  }

}
