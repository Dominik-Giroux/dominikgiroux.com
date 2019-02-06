import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private mediaMatcher: MediaMatcher,
    public router: Router
  ) { }

  @ViewChild('sidenav') sidenav: MatSidenav;
  mediaQueryList: any;

  ngOnInit() {
    this.mediaQueryList = this.mediaMatcher.matchMedia('(max-width: 600px)');
  }

  sidenavToggle() {
    this.sidenav.toggle();
  }

}
