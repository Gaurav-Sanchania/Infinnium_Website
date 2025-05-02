import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-trusted-leaders',
  templateUrl: './trusted-leaders.component.html',
  styleUrls: ['./trusted-leaders.component.css'],
  imports: [CommonModule],
})
export class TrustedLeadersComponent implements OnChanges, AfterViewInit {
  @Input() bgColor = '#12423C';
  textColor = 'white';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bgColor']) {
      this.textColor = this.bgColor === '#12423C' ? 'white' : 'black';
    }
    // refresh logic
  }

  ngAfterViewInit(): void {
    const elements = this.el.nativeElement.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el: HTMLElement, index: number) => {
      // Add initial hidden state
      this.renderer.addClass(el, 'opacity-0');
      this.renderer.setStyle(el, 'transition', `all 0.8s ease ${index * 0.2}s`);
      observer.observe(el);
    });
  }
}
