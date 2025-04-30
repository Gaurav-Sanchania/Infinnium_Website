import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-products-4ig-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements AfterViewInit {
  @ViewChild('animatedSection', { static: true }) animatedSection!: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = this.animatedSection.nativeElement;
          el.classList.remove('opacity-0');
          el.classList.add('fade-in');
          obs.unobserve(el);
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(this.animatedSection.nativeElement);
  }
}
