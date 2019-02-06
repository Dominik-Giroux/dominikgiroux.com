import { Component, EventEmitter, Output, HostListener, AfterViewInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  constructor(
    public router: Router
  ) { }

  @Input() mediaQueryList: any;
  @Output() sidenavToggle: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  @ViewChild('navbar') menuElement: any;

  navbarTransparent = true;
  menuPosition: any;

  ngAfterViewInit() {
    this.menuPosition = this.menuElement._elementRef.nativeElement.offsetTop;
  }

  toggle() {
    this.sidenavToggle.next();
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    if (window.pageYOffset === this.menuPosition && this.router.url === '/') {
      this.navbarTransparent = true;
    } else {
      this.navbarTransparent = false;
    }
  }

}
