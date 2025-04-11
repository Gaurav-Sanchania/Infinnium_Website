import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-privacy-policy',
  imports: [FooterComponent, RouterLink],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {
  @ViewChild('header', { static: false }) header!: ElementRef;
  @ViewChild('logoSvg', { static: false }) logoSvg!: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.header && this.logoSvg) {
      const headerEl = this.header.nativeElement;
      const logoPath = this.logoSvg.nativeElement.querySelector('.cls-1');

      if (window.scrollY > 0) {
        headerEl.classList.add('header-bg-scrolled');
        headerEl.classList.remove('header-bg');
        logoPath.style.fill = '#234653';
      } else {
        headerEl.classList.add('header-bg');
        headerEl.classList.remove('header-bg-scrolled');
        logoPath.style.fill = '#ffffff';
      }
    }
  }
}
