import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
// import AOS from 'aos';

@Component({
  standalone: true,
  selector: 'app-legal-hold-features',
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent implements AfterViewInit {
  @ViewChildren('countUp') countUpElements!: QueryList<ElementRef>;
  private hasAnimated = false;

  ngAfterViewInit() {
    import('aos').then(AOS => {
      if (!this.hasAnimated) {
        AOS.default.init({ duration: 1200, once: true });
        this.initCountUpAnimations();
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
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
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
        }, {
          rootMargin: '0px',
          threshold: 0.1
        });
        observer.observe(element);
      },);
    });

    this.hasAnimated = true;
  }
}
