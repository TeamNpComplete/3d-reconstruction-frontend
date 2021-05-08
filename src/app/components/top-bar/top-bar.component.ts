import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  activeLink: { text: string, path: string} = { text: '', path: '' };
  links: Array<{text: string, path: string}> = [
    { text: 'Reconstruction', path: '/reconstruct' },
    { text: 'Saved Models', path: '/saved' }
  ];
  
  constructor(private router: Router) { 

  }

  ngOnInit(): void {
    this.activeLink = this.links[0];
  }

  onLinkClicked(link: { text: string, path: string }) {
    this.activeLink = link;
  }

}
