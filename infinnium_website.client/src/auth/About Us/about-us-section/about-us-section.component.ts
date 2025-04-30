import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about-us-section',
  imports: [],
  templateUrl: './about-us-section.component.html',
  styleUrl: './about-us-section.component.css',
})
export class AboutUsSectionComponent implements AfterViewInit {
  @ViewChildren('animateElement') elements!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.removeClass(entry.target, 'opacity-0');
          this.renderer.removeClass(entry.target, 'translate-y-8');
          this.renderer.addClass(entry.target, 'opacity-100');
          this.renderer.addClass(entry.target, 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    this.elements.toArray().forEach(el => observer.observe(el.nativeElement));
  }
}
