import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-expectation',
  templateUrl: './expectation.component.html',
  styleUrl: './expectation.component.css',
})
export class ExpectationComponent implements AfterViewInit {
  @ViewChildren('observeSection') sections!: QueryList<ElementRef>;
  @ViewChild('bgSection') bgSection!: ElementRef;

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
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            if (element.classList.contains('fade-in-left')) {
              element.classList.add('in-view');
            } else if (element.classList.contains('fade-in-right')) {
              element.classList.add('in-view');
            }
            fadeObserver.unobserve(element);
          }
        });
      },
      { threshold: 0.2 }
    );

    this.sections.forEach(section => {
      fadeObserver.observe(section.nativeElement);
    });

    const bgObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.bgSection.nativeElement.classList.add('bg-section-visible');
          bgObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    bgObserver.observe(this.bgSection.nativeElement);
  }
}
