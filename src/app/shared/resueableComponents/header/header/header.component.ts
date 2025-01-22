import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  isMenuOpen = false; // Tracks the state of the main menu
  activeDropdown: string | null = null; // Tracks the currently open dropdown

  constructor(private elementRef: ElementRef) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(menu: string): void {
    this.activeDropdown = this.activeDropdown === menu ? null : menu;
  }

  ngAfterViewInit(): void {
    // Access the necessary DOM elements
    const menuBtn = this.elementRef.nativeElement.querySelector('#menu-btn');
    const closeMenuBtn = this.elementRef.nativeElement.querySelector('#close-menu-btn');
    const mobileMenu = this.elementRef.nativeElement.querySelector('#mobile-menu');

    // Ensure elements exist before adding event listeners
    if (menuBtn && closeMenuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('show');
      });

      closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
      });
    }

    // Dropdown functionality for mobile
    const dropdowns = [
      { trigger: '#mobile-services-dropdown', menu: '#mobile-services-menu' },
      { trigger: '#mobile-software-dropdown', menu: '#mobile-software-menu' },
      { trigger: '#mobile-it-hiring-dropdown', menu: '#mobile-it-hiring-menu' },
      { trigger: '#mobile-tech-talent-dropdown', menu: '#mobile-tech-talent-menu' },
      { trigger: '#mobile-training-dropdown', menu: '#mobile-training-menu' }
    ];

    dropdowns.forEach(({ trigger, menu }) => {
      const dropdownTrigger = this.elementRef.nativeElement.querySelector(trigger);
      const dropdownMenu = this.elementRef.nativeElement.querySelector(menu);

      if (dropdownTrigger && dropdownMenu) {
        dropdownTrigger.addEventListener('click', () => {
          dropdownMenu.classList.toggle('hidden');
        });
      }
    });
  }
}
