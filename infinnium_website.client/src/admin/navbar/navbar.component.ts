import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginService } from '../../services/loginService.service';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [RouterLink, RouterOutlet, CommonModule, RouterLinkActive],
  providers: [LoginService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  constructor(private loginService: LoginService) {}

  clearLocalStorage() {
    this.loginService.logout();
  }

  @ViewChild('mobileMenuBtn', { static: false }) mobileMenuBtn!: ElementRef;
  @ViewChild('mobileSidebar', { static: false }) mobileSidebar!: ElementRef;
  @ViewChild('mobileCloseBtn', { static: false }) mobileCloseBtn!: ElementRef;
  @ViewChild('navMenu', { static: false }) navMenu!: ElementRef;
  @ViewChild('header', { static: false }) header!: ElementRef;
  @ViewChild('logoSvg', { static: false }) logoSvg!: ElementRef;

  ngAfterViewInit() {
    this.mobileMenuBtn.nativeElement.addEventListener('click', () => {
      this.mobileSidebar.nativeElement.classList.add('active');
    });

    this.mobileCloseBtn.nativeElement.addEventListener('click', () => {
      this.mobileSidebar.nativeElement.classList.remove('active');
    });

    document.querySelectorAll<HTMLElement>('.dropdown-toggle').forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownMenu = toggle.nextElementSibling as HTMLElement;
        if (dropdownMenu) {
          dropdownMenu.classList.toggle('hidden');
        }
      });
    });

    const headerEl = this.header.nativeElement;
    const logoPath = this.logoSvg.nativeElement.querySelector('.cls-1');

    headerEl.classList.add('header-bg-scrolled');
    headerEl.classList.remove('header-bg');
    logoPath.style.fill = '#000000';
  }

  toggleMobileMenu() {
    this.navMenu.nativeElement.classList.toggle('hidden');
  }
}
