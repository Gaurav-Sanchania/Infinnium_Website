import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-products-breach-advantages',
  imports: [],
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.css'
})
export class AdvantagesComponent implements AfterViewInit {
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

    // Apply observer to all elements after view initialization
    this.elements.toArray().forEach(el => observer.observe(el.nativeElement));
  }
}
