import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-we-you',
  imports: [],
  templateUrl: './we-you.component.html',
  styleUrl: './we-you.component.css',
})
export class WeYouComponent implements AfterViewInit {
  @ViewChildren('observeSection', { read: ElementRef })
  sectionElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;
            const animatedElements = section.querySelectorAll<HTMLElement>('[data-animate]');

            animatedElements.forEach(el => {
              const animation = el.getAttribute('data-animate');
              el.classList.remove('opacity-0');

              switch (animation) {
                case 'fade-up':
                  el.classList.remove('translate-y-8');
                  break;
                case 'from-left':
                  el.classList.remove('-translate-x-12');
                  break;
                case 'from-right':
                  el.classList.remove('translate-x-12');
                  break;
              }
            });

            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.2 }
    );

    this.sectionElements.forEach(section => {
      observer.observe(section.nativeElement);
    });
  }
}
