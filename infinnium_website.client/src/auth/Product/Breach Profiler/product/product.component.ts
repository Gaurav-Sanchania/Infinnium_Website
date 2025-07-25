import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-products-breach-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const elements =
      this.el.nativeElement.querySelectorAll('.fade-in-on-scroll');

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            obs.unobserve(entry.target); // animate once
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((el: Element) => observer.observe(el));
  }

  toggleDescription(id: number): void {
    const desc = document.getElementById(`desc-${id}`);
    const button = document.querySelector(
      `[data-id="${id}"]`
    ) as HTMLButtonElement;

    if (desc && button) {
      const isExpanded =
        desc.classList.contains('slide-toggle') &&
        !desc.classList.contains('collapsing');

      if (isExpanded) {
        desc.classList.add('collapsing');
        button.textContent = 'Read More ↓';
        setTimeout(() => {
          desc.classList.remove('slide-toggle', 'collapsing');
          desc.classList.add('truncate-text');
        }, 500);
      } else {
        desc.classList.remove('truncate-text');
        desc.classList.add('slide-toggle');
        button.textContent = 'Read Less ↑';
      }
    }
  }
}
