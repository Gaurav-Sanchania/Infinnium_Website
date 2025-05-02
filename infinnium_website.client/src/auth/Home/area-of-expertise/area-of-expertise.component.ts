import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-area-of-expertise',
  imports: [RouterLink],
  templateUrl: './area-of-expertise.component.html',
  styleUrl: './area-of-expertise.component.css',
})
export class AreaOfExpertiseComponent implements AfterViewInit {
  @ViewChild('servicesGrid', { static: true }) servicesGrid!: ElementRef;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    // Defer to ensure DOM is fully rendered
    setTimeout(() => this.initAnimations(), 50);
  }

  private initAnimations(): void {
    const grid = this.servicesGrid.nativeElement as HTMLElement;
    console.log('Services grid:', grid);

    // Fade in grid when it enters viewport
    const gridObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('grid-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    gridObserver.observe(grid);

    // Animate cards one by one
    const cards = this.elementRef.nativeElement.querySelectorAll('.card-item') as NodeListOf<HTMLElement>;
    console.log('Found cards:', cards.length);
    cards.forEach(card => card.classList.add('card-hidden'));

    const cardObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.style.animationDelay = `${idx * 0.1}s`;
          el.classList.add('animate-card');
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px' });

    cards.forEach(card => cardObserver.observe(card));
  }
}
