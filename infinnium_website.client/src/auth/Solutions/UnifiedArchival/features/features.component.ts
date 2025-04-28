import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
// import AOS from 'aos';

@Component({
  standalone: true,
  selector: 'app-unified-archival-features',
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
        AOS.init({ duration: 1200, once: true });
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

  toggleDescription(id: string | number): void {
    const desc = document.getElementById(`desc-${id}`);
    // console.log(desc);

    const button = document.querySelector(`[data-id="${id}"]`) as HTMLButtonElement;
    // console.log(button);

    if (desc) {
      // console.log("entered inside if");
      const isExpanded = desc.classList.contains('slide-toggle');

      if (isExpanded) {
        // COLLAPSING
        const fullHeight = desc.scrollHeight;
        desc.style.maxHeight = `${fullHeight}px`; // Start from current height
        desc.classList.remove('truncate-text');
        // console.log("removed truncate text class");

        requestAnimationFrame(() => {
          desc.style.maxHeight = '3em'; // Collapse to truncated height
        });

        button.textContent = 'Read More ↓';

        setTimeout(() => {
          desc.classList.remove('slide-toggle');
          desc.classList.add('truncate-text');
          desc.style.maxHeight = '';
        }, 400);

      } else {
        // EXPANDING
        desc.classList.remove('truncate-text');
        desc.classList.add('slide-toggle');
        desc.style.maxHeight = '3em';

        requestAnimationFrame(() => {
          desc.style.maxHeight = `${desc.scrollHeight}px`; // Animate open
        });

        button.textContent = 'Read Less ↑';

        setTimeout(() => {
          desc.style.maxHeight = 'none'; // Let content grow naturally
        }, 400);
      }
    }
  }
}
