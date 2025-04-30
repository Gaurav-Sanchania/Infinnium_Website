import { Component, AfterViewInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-products-obscure-features',
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
})
export class FeaturesComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }

  private initScrollAnimations(): void {
    const elementsToAnimate = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate'); // CSS class to trigger animation
          observer.unobserve(entry.target);      // Stop observing after animation
        }
      });
    }, {
      threshold: 0.5
    });

    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  }

  toggleDescription(id: number): void {
    const desc = document.getElementById(`desc-${id}`);
    const button = document.querySelector(`[data-id="${id}"]`) as HTMLButtonElement;

    if (desc && button) {
      desc.classList.toggle('truncate-text');
      button.textContent = desc.classList.contains('truncate-text')
        ? 'Read More ↓'
        : 'Read Less ↑';
    }
  }
}
