import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-our-products',
  imports: [RouterLink],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.css',
})
export class OurProductsComponent implements AfterViewInit {
  @ViewChild('productGrid', { static: true }) productGrid!: ElementRef;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    // small delay to ensure DOM render
    setTimeout(() => this.initAnimations(), 50);
  }

  private initAnimations(): void {
    const gridEl = this.productGrid.nativeElement as HTMLElement;
    gridEl.classList.add('grid-hidden');

    // header fade-in
    const header = this.elementRef.nativeElement.querySelector('.section-header') as HTMLElement;
    if (header) {
      header.classList.add('header-hidden');
      const headerObs = new IntersectionObserver((entries, obs) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            header.classList.add('animate-product');
            obs.unobserve(header);
          }
        });
      }, { threshold: 0.1 });
      headerObs.observe(header);
    }

    // product items
    const items = this.elementRef.nativeElement.querySelectorAll('.product-item') as NodeListOf<HTMLElement>;
    items.forEach(el => el.classList.add('item-hidden'));

    const itemObs = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.style.animationDelay = `${idx * 0.15}s`;
          el.classList.add('animate-product');
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px' });

    items.forEach(el => itemObs.observe(el));

    // grid fade-in (last)
    const gridObs = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          gridEl.classList.add('grid-visible');
          obs.unobserve(gridEl);
        }
      });
    }, { threshold: 0.1 });
    gridObs.observe(gridEl);
  }
}
