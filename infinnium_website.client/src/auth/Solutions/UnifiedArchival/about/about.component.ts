import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-unified-archival-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('animatedSection', { static: true }) animatedSection!: ElementRef;

  ngAfterViewInit(): void {
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
}
