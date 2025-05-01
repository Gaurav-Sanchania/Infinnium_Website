import { AfterViewInit, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-reach-out',
  templateUrl: './reach-out.component.html',
  styleUrl: './reach-out.component.css',
})
export class ReachOutComponent implements AfterViewInit {
  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('show');
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    const animatedElements = document.querySelectorAll('.fade-up');
    animatedElements.forEach(el => observer.observe(el));
  }
}
