import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css'],
})
export class WhatWeDoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('animatedSection', { static: true }) animatedSection!: ElementRef;
  @ViewChildren('divider') dividers!: QueryList<ElementRef>;
  @ViewChildren('feature') features!: QueryList<ElementRef>;

  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.handleIntersection();
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    this.observer.observe(this.animatedSection.nativeElement);
  }

  private handleIntersection() {
    // Animate headers
    const headers =
      this.animatedSection.nativeElement.querySelectorAll('.scroll-animation');
    headers.forEach((el: HTMLElement) => el.classList.add('visible'));

    // Animate dividers
    this.dividers.forEach((divider, index) => {
      setTimeout(() => {
        divider.nativeElement.classList.add('visible');
      }, index * 200);
    });

    // Animate features with staggered delay
    this.features.forEach((feature, index) => {
      setTimeout(() => {
        feature.nativeElement.classList.add('visible');
      }, index * 200);
    });
  }
}
