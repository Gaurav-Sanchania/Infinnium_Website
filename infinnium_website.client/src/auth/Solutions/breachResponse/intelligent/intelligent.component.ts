import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-intelligent',
  imports: [],
  templateUrl: './intelligent.component.html',
  styleUrl: './intelligent.component.css',
})
export class IntelligentComponent implements AfterViewInit {
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

    // Collapse
    if (isExpanded) {
      desc.classList.add('collapsing');
      // Don't change button text immediately
      setTimeout(() => {
        desc.classList.remove('slide-toggle', 'collapsing');
        desc.classList.add('truncate-text');
        button.textContent = 'Read More ↓'; // Text updates after animation
      }, 500); // Match CSS transition duration
    }
    // Expand
    else {
      desc.classList.remove('truncate-text');
      desc.classList.add('slide-toggle');
      // Delay the button text update slightly for smooth visual experience
      setTimeout(() => {
        button.textContent = 'Read Less ↑';
      }, 100); // Optional delay to feel more natural
    }
  }
}
}
