import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-global-impact',
  imports: [RouterLink],
  templateUrl: './global-impact.component.html',
  styleUrls: ['./global-impact.component.css']
})
export class GlobalImpactComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sectionElement') sectionElement!: ElementRef;
  private observer!: IntersectionObserver;
  private animationFrameIds: number[] = [];

  ngAfterViewInit() {
    this.initializeRings();
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    this.cleanup();
  }

  private initializeRings() {
    const rings = this.sectionElement.nativeElement.querySelectorAll('.progress-ring');
    rings.forEach((ring: HTMLElement) => {
      const progress = ring.querySelector('.progress') as SVGCircleElement;
      if (progress) {
        const radius = progress.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        // Initialize ring state
        progress.style.strokeDasharray = `${circumference}`;
        progress.style.strokeDashoffset = `${circumference}`;
        progress.style.opacity = '0';
      }
    });
  }

  private setupIntersectionObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          this.animateElements();
          this.observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.25,
      rootMargin: '0px 0px -100px 0px'
    });

    this.observer.observe(this.sectionElement.nativeElement);
  }

  private animateElements() {
    const rings = this.sectionElement.nativeElement.querySelectorAll('.progress-ring');

    rings.forEach((ring: HTMLElement) => {
      const percent = parseFloat(ring.getAttribute('data-percent') ?? '0');
      const progress = ring.querySelector('.progress') as SVGCircleElement;
      const numberElement = ring.querySelector('.count-up') as HTMLElement;

      if (progress && numberElement) {
        const radius       = progress.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const fullOffset    = circumference;
        const targetOffset  = circumference * (1 - percent / 100);

        // 1. make sure it's visible
        progress.style.opacity = '1';

        // 2. two-phase keyframes:
        //    - 0% → 100% by 60% of the duration
        //    - 100% → target% by 100% of the duration
        progress.animate(
          [
            { strokeDashoffset: fullOffset, offset: 0 },
            { strokeDashoffset: 0,          offset: 0.6 },
            { strokeDashoffset: targetOffset, offset: 1 }
          ],
          {
            duration: 3000,               // a bit slower overall
            easing:   'ease-out',         // smooth deceleration
            fill:     'forwards'
          }
        );

        // still count up straight to your final percent
        this.animateNumber(numberElement, percent);
      }
    });
  }



  private animateNumber(element: HTMLElement, target: number) {
    const numberSpan = element.childNodes[0] as Text; // get only the number text node

    const duration = 3000; // match the circle duration
    const frameRate = 60;
    const totalFrames = Math.round(duration / (1000 / frameRate));
    let frame = 0;

    const countTo = target;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentNumber = Math.round(countTo * progress);

      numberSpan.textContent = `${currentNumber}`;

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, 1000 / frameRate);
  }




  private cleanup() {
    this.observer?.disconnect();
    this.animationFrameIds.forEach(id => cancelAnimationFrame(id));
  }
}
