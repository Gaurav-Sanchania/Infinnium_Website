import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  Renderer2,
  OnDestroy
} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mobileMenuBtn', { static: false }) mobileMenuBtn!: ElementRef;
  @ViewChild('mobileSidebar', { static: false }) mobileSidebar!: ElementRef;
  @ViewChild('mobileCloseBtn', { static: false }) mobileCloseBtn!: ElementRef;
  @ViewChild('sidebarOverlay', { static: false }) sidebarOverlay!: ElementRef;
  @ViewChild('navMenu', { static: false }) navMenu!: ElementRef;
  @ViewChild('header', { static: false }) header!: ElementRef;
  @ViewChild('logoSvg', { static: false }) logoSvg!: ElementRef;

  private unlisteners: (() => void)[] = [];

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Open sidebar
    this.unlisteners.push(
      this.renderer.listen(this.mobileMenuBtn.nativeElement, 'click', () => {
        this.toggleSidebar(true);
      })
    );

    // Close sidebar
    this.unlisteners.push(
      this.renderer.listen(this.mobileCloseBtn.nativeElement, 'click', () => {
        this.toggleSidebar(false);
      })
    );

    // Close sidebar when clicking overlay
    this.unlisteners.push(
      this.renderer.listen(this.sidebarOverlay.nativeElement, 'click', (event) => {
        // Only close if clicking directly on the overlay, not through event bubbling
        if (event.target === this.sidebarOverlay.nativeElement) {
          this.toggleSidebar(false);
        }
      })
    );

    // Dropdown toggles - stop propagation to prevent overlay click
    // Update the dropdown toggle handler
document.querySelectorAll<HTMLElement>('.dropdown-toggle').forEach((toggle) => {
  this.unlisteners.push(
    this.renderer.listen(toggle, 'click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const dropdownMenu = toggle.nextElementSibling as HTMLElement;
      if (dropdownMenu) {
        const isOpening = !dropdownMenu.classList.contains('show');

        // Force reflow before adding show class
        if (isOpening) {
          dropdownMenu.style.display = 'grid';
          void dropdownMenu.offsetHeight; // Trigger reflow
        }

        dropdownMenu.classList.toggle('show');
        dropdownMenu.classList.toggle('hidden');
        toggle.classList.toggle('active');

        // Handle closing transition
        if (!isOpening) {
          dropdownMenu.addEventListener('transitionend', function handler() {
            dropdownMenu.style.display = '';
            dropdownMenu.removeEventListener('transitionend', handler);
          }, { once: true });
        }
      }
    })
  );
});

    // Close sidebar when route changes (for regular links, not dropdown toggles)
    document.querySelectorAll('.mobile-nav a').forEach(link => {
      if (!link.classList.contains('dropdown-toggle')) {
        this.unlisteners.push(
          this.renderer.listen(link, 'click', () => {
            this.toggleSidebar(false);
          })
        );
      }
    });
  }

  ngOnDestroy() {
    // Clean up all event listeners
    this.unlisteners.forEach(unlisten => unlisten());
  }

  toggleSidebar(open: boolean) {
    if (open) {
      this.renderer.addClass(this.mobileSidebar.nativeElement, 'active');
      this.renderer.addClass(this.sidebarOverlay.nativeElement, 'active');
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeClass(this.mobileSidebar.nativeElement, 'active');
      this.renderer.removeClass(this.sidebarOverlay.nativeElement, 'active');
      this.renderer.removeStyle(document.body, 'overflow');
    }
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
