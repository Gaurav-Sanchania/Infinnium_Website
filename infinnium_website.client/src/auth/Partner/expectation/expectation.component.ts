import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-expectation',
  imports: [],
  templateUrl: './expectation.component.html',
  styleUrl: './expectation.component.css',
})
export class ExpectationComponent implements AfterViewInit {
  @ViewChildren('observeSection') sections!: QueryList<ElementRef>;

  ngAfterViewInit() {
    import('aos').then(AOS => {
      AOS.default.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-quad',
      });
      this.initScrollAnimations();
    });
  }

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
