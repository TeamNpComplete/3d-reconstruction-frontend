import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit, OnDestroy {

  isAuthenticated : boolean = false;

  activeLink: { text: string, path: string} = { text: '', path: '' };
  links: Array<{text: string, path: string}> = [
    { text: 'Reconstruction', path: '/reconstruct' },
    { text: 'Saved Models', path: '/saved' }
  ];

  routerSubscription !: Subscription;
  authenticationServiceSubscription !: Subscription;
  
  constructor(private router: Router, private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
          let path = event.url;
          this.activeLink = { text: '', path: '' };

          for(let i = 0; i < this.links.length; i++) {
            if(this.links[i].path === path)
              this.activeLink = this.links[i];
          }
        }
      }
    )

    this.getAuthenticationStatus();
  }

  ngOnDestroy(): void {
    this.authenticationServiceSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
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
