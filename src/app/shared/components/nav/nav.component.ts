import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'jm-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() home: HTMLElement;
  @Input() about: HTMLElement;
  @Input() portfolio: HTMLElement;
  @Input() contact: HTMLElement;
  @Output() sideNavChange: EventEmitter<never>;

  constructor() {
    this.home = document.createElement('section');
    this.about = document.createElement('section');
    this.portfolio = document.createElement('section');
    this.contact = document.createElement('section');
    this.sideNavChange = new EventEmitter<never>();
  }

  navigate(element: HTMLElement): void {
    element.scrollIntoView({ behavior: 'smooth' });
  }

  sideChange(): void {
    this.sideNavChange.emit();
  }
}
