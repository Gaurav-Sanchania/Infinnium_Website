import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { ScrollToTopComponent } from "../../../shared/components/scroll-top/scroll-to-top.component";

@Component({
  standalone: true,
  selector: 'app-terms',
  imports: [FooterComponent, RouterLink, ScrollToTopComponent],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css',
})
export class TermsComponent implements AfterViewInit {
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

    document
      .querySelectorAll<HTMLElement>('.dropdown-toggle')
      .forEach((toggle) => {
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          const dropdownMenu = toggle.nextElementSibling as HTMLElement;
          if (dropdownMenu) {
            dropdownMenu.classList.toggle('hidden');
          }
        });
      });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.header && this.logoSvg) {
      const headerEl = this.header.nativeElement;
      const logoPath = this.logoSvg.nativeElement.querySelector('.cls-1');

      if (window.scrollY > 0) {
        headerEl.classList.add('header-bg-scrolled');
        headerEl.classList.remove('header-bg');
        logoPath.style.fill = '#000000';
      } else {
        headerEl.classList.add('header-bg');
        headerEl.classList.remove('header-bg-scrolled');
        logoPath.style.fill = '#ffffff';
      }
    }
  }

  toggleMobileMenu() {
    this.navMenu.nativeElement.classList.toggle('hidden');
  }
}
