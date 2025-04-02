import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-our-products',
  imports: [],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.css'
})
export class OurProductsComponent implements OnInit {
  @ViewChild('productGrid', { static: true }) productGrid!: ElementRef;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.initAnimations();
  }

  private initAnimations(): void {
    const productGrid = this.productGrid?.nativeElement;
    if (productGrid) {
      productGrid.style.opacity = '1';
    }

    const productItems = this.elementRef.nativeElement.querySelectorAll('.product-item');
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const productObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const delay = index * 0.15;
          (entry.target as HTMLElement).style.animationDelay = `${delay}s`;
          entry.target.classList.add('animate-product');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    productItems.forEach((item: HTMLElement) => {
      item.style.opacity = '0';
      productObserver.observe(item);
    });

    const headerElements = this.elementRef.nativeElement.querySelectorAll('.animate-product');
    headerElements.forEach((el: HTMLElement) => {
      el.style.opacity = '0';
      setTimeout(() => {
        el.style.opacity = '1';
      }, 500);
    });
  }
}
