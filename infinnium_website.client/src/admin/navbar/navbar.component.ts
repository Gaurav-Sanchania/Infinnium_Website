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
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit {
  showLogoutConfirm = false;

  constructor(private loginService: LoginService) {}

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

    document.querySelectorAll<HTMLElement>('.dropdown-toggle').forEach((toggle) => {
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

  // Called when user clicks Logout (first time)
  onLogoutClick() {
    console.log('User clicked logout — showing confirmation popup.');
    this.showLogoutConfirm = true;
  }

  // Confirm logout from popup
  confirmLogout() {
    console.log('Confirmed logout — clearing local storage.');
    this.showLogoutConfirm = false;
    this.loginService.logout();
  }

  // Cancel logout
  cancelLogout() {
    this.showLogoutConfirm = false;
  }

  toggleMobileMenu() {
    this.navMenu.nativeElement.classList.toggle('hidden');
  }
}
