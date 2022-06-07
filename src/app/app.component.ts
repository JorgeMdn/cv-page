import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenavContent } from '@angular/material/sidenav';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'jm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(MatSidenavContent) private matSidenavContent: MatSidenavContent;
  isDesktopMode = true;
  showSubmenuCatalogs: boolean;
  scrollPosition: number;

  constructor() {
    this.isDesktopMode = null;
    this.showSubmenuCatalogs = null;
    this.scrollPosition = 0;
  }

  ngOnInit(): void {
    this.trackingResizeWindow();
    this.trackingScroll();
  }

  private trackingResizeWindow(): void {
    fromEvent(window, 'resize').subscribe((event) => {
      const windowEvent = event.target as Window;
      if (windowEvent.innerWidth > 767) {
        this.isDesktopMode = true;
      } else {
        this.isDesktopMode = false;
      }
    });
    if (window.innerWidth > 767) {
      this.isDesktopMode = true;
    } else {
      this.isDesktopMode = false;
    }
  }

  private trackingScroll(): void {
    fromEvent(document, 'scroll').subscribe((event) => {
      console.log(event);
    });
  }
}
