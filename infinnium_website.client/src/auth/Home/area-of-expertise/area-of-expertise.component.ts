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
  @ViewChild('cardItems', { static: true }) cardItems!: ElementRef;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.initAnimations();
  }

  private initAnimations(): void {
    const grid = this.servicesGrid?.nativeElement;
    if (grid) {
      grid.style.opacity = '1';
    }

    const cards = this.elementRef.nativeElement.querySelectorAll('.card-item');
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px',
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.animationDelay = `${
            index * 0.1
          }s`;
          entry.target.classList.add('animate-card');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    cards.forEach((card: HTMLElement) => {
      card.style.opacity = '0';
      observer.observe(card);
    });

    const gridObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (grid) {
      gridObserver.observe(grid);
    }
  }
}
