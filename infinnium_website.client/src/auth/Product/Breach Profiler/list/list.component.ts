import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  standalone: true,
  selector: 'app-products-breach-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements AfterViewInit {
  @ViewChildren('countUp') countUpElements!: QueryList<ElementRef>;
  private hasAnimated = false;

  ngAfterViewInit() {
    if (!this.hasAnimated) {
      AOS.init({ duration: 1000, once: true, easing: 'ease-out-quad' });
      this.initCountUpAnimations();
    }
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
      }, );
    });

    this.hasAnimated = true;
  }
}
