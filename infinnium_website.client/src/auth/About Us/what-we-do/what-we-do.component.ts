import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about-us-what-we-do',
  imports: [],
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.css',
})
export class WhatWeDoComponent implements AfterViewInit {
  @ViewChildren('animateElement') animateElements!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.animateElements.forEach((element) => {
      observer.observe(element.nativeElement);
    });
  }
}
