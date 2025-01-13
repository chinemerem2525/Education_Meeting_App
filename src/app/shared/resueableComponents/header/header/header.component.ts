import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const menuTrigger = this.elementRef.nativeElement.querySelector('.menu-trigger');
    const nav = this.elementRef.nativeElement.querySelector('.nav');

    if (menuTrigger && nav) {
      menuTrigger.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuTrigger.classList.toggle('active');
      });
    }
  }
}
