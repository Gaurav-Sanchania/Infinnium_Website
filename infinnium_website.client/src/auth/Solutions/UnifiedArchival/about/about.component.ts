import { Component, AfterViewInit, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-unified-archival-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren('observeSection') sections!: QueryList<ElementRef>; // For scroll-triggered animations
  @ViewChild('animatedSection', { static: true }) animatedSection!: ElementRef;

  ngAfterViewInit() {
    this.initScrollAnimations();

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = this.animatedSection.nativeElement;
          el.classList.remove('opacity-0');
          el.classList.add('fade-in');
          obs.unobserve(el);
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(this.animatedSection.nativeElement);
  }

  // Scroll-triggered animation logic
  initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            if (element.classList.contains('fade-in-left')) {
              element.classList.add('in-view');
            } else if (element.classList.contains('fade-in-right')) {
              element.classList.add('in-view');
            }
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.2 }
    );

    this.sections.forEach((section) => {
      observer.observe(section.nativeElement);
    });
  }
}
