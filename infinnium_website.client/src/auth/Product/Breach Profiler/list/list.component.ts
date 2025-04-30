import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-products-breach-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements AfterViewInit {
  @ViewChildren('observeSection') sections!: QueryList<ElementRef>; // For scroll-triggered animations
  @ViewChildren('countUp') countUpElements!: QueryList<ElementRef>;
  private hasAnimated = false;

  ngAfterViewInit() {
    import('aos').then((AOS) => {
      if (!this.hasAnimated) {
        AOS.default.init({
          duration: 1000,
          once: true,
          easing: 'ease-out-quad',
        });
        this.initCountUpAnimations();
        this.initScrollAnimations(); // Initialize scroll animations
      }
    });
  }

  initCountUpAnimations() {
    const animationDuration = 2200;
    const frameDuration = 1000 / 60;
    //const delay = 500;

    this.countUpElements.forEach((el: ElementRef) => {
      const element = el.nativeElement;
      const target = parseInt(element.getAttribute('data-count'), 10);
      const suffix = '+';
      const totalFrames = Math.round(animationDuration / frameDuration);

      setTimeout(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                let currentFrame = 0;

                const counterAnimation = setInterval(() => {
                  currentFrame++;
                  const progress = currentFrame / totalFrames;
                  const currentValue = Math.round(target * progress);

                  if (currentValue >= target) {
                    clearInterval(counterAnimation);
                    element.textContent = `${target}${suffix}`;
                  } else {
                    element.textContent = `${currentValue}${suffix}`;
                  }
                }, frameDuration);

                observer.unobserve(element);
              }
            });
          },
          {
            rootMargin: '0px',
            threshold: 0.1,
          }
        );
        observer.observe(element);
      });
    });

    this.hasAnimated = true;
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
