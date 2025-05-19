import { Component, AfterViewInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-products-4ig-features',
  imports: [],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements AfterViewInit {

  // Lifecycle hook for initializing the animations after the view is initialized
  ngAfterViewInit() {
    console.log('Component Initialized');
    this.initScrollAnimations();
  }

  // Initialize scroll-triggered animations using IntersectionObserver
  initScrollAnimations() {
    const elementsToAnimate = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate'); // Trigger animation when the element comes into view
          observer.unobserve(entry.target); // Stop observing the element once it has been animated
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of the element is visible
    });

    elementsToAnimate.forEach(element => {
      observer.observe(element); // Observe each element with the 'data-animate' attribute
    });
  }

  // Existing toggleDescription method for expanding and collapsing content
  toggleDescription(id: number): void {
    const desc = document.getElementById(`desc-${id}`);
    const button = document.querySelector(
      `[data-id="${id}"]`
    ) as HTMLButtonElement;

    if (desc && button) {
      const isExpanded = desc.classList.contains('slide-toggle');

      if (isExpanded) {
        // COLLAPSING
        const fullHeight = desc.scrollHeight;
        desc.style.maxHeight = `${fullHeight}px`; // Start from current height
        desc.classList.remove('truncate-text');

        requestAnimationFrame(() => {
          desc.style.maxHeight = '3em'; // Collapse to truncated height
        });

        button.textContent = 'Read More ↓';

        setTimeout(() => {
          desc.classList.remove('slide-toggle');
          desc.classList.add('truncate-text');
          desc.style.maxHeight = '';
        }, 400);
      } else {
        // EXPANDING
        desc.classList.remove('truncate-text');
        desc.classList.add('slide-toggle');
        desc.style.maxHeight = '4.5em'; // Start collapsed

        requestAnimationFrame(() => {
          desc.style.maxHeight = `${desc.scrollHeight}px`; // Animate open
        });

        button.textContent = 'Read Less ↑';

        setTimeout(() => {
          desc.style.maxHeight = 'none'; // Let content grow naturally
        }, 400);
      }
    }
  }
}
