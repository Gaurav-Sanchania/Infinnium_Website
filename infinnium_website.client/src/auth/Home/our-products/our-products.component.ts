/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-our-products',
  imports: [RouterLink, CommonModule],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.css',
})
export class OurProductsComponent implements AfterViewInit {
  @ViewChild('sliderTrack', { static: false }) sliderTrack!: ElementRef;
  @ViewChild('productGrid', { static: false }) productGrid!: ElementRef;
@ViewChild('leftCard', { static: false }) leftCard!: ElementRef;
@ViewChild('rightCard', { static: false }) rightCard!: ElementRef;
@ViewChild('bottomCard', { static: false }) bottomCard!: ElementRef;

  isMobile = window.innerWidth < 768;
  slides = [0, 1, 2];
  displaySlides = [2, 0, 1, 2, 0];
  currentSlide = 1;

  private intervalId: any;
  private touchStartX = 0;
  private touchEndX = 0;
  private isTransitioning = false;

  ngAfterViewInit(): void {
    this.setupLoopSlides();
    this.initSlider();
    this.initCardAnimations();
  }

  initCardAnimations(): void {
  const options = {
    root: null,
    threshold: 0.3
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.leftCard.nativeElement.classList.remove('item-hidden');
        this.leftCard.nativeElement.classList.add('slide-in-left');

        this.rightCard.nativeElement.classList.remove('item-hidden');
        this.rightCard.nativeElement.classList.add('slide-in-right');

        this.bottomCard.nativeElement.classList.remove('item-hidden');
        this.bottomCard.nativeElement.classList.add('slide-in-up');

        observer.unobserve(this.productGrid.nativeElement);
      }
    });
  }, options);

  observer.observe(this.productGrid.nativeElement);
}

  setupLoopSlides(): void {
    this.displaySlides = [
      this.slides[this.slides.length - 1], // clone of last
      ...this.slides,
      this.slides[0], // clone of first
    ];
  }

  initSlider(): void {
    if (!this.isMobile || !this.sliderTrack) return;

    const track = this.sliderTrack.nativeElement as HTMLElement;

    setTimeout(() => {
      this.slideTo(this.currentSlide, false);
    });

    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);

    track.addEventListener('transitionend', () => {
      this.isTransitioning = false;
      if (this.currentSlide === this.displaySlides.length - 1) {
        this.slideTo(1, false);
      } else if (this.currentSlide === 0) {
        this.slideTo(this.displaySlides.length - 2, false);
      }
    });

    // Touch swipe handlers
    track.addEventListener('touchstart', (e) => {
      this.touchStartX = e.touches[0].clientX;
    });

    track.addEventListener('touchmove', (e) => {
      this.touchEndX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', () => {
      this.handleSwipe();
    });
  }

  slideTo(index: number, animate = true): void {
    const track = this.sliderTrack.nativeElement as HTMLElement;
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentSlide = index;

    track.style.transition = animate ? 'transform 0.6s ease' : 'none';
    track.style.transform = `translateX(-${index * 100}%)`;

    if (!animate) {
      // prevent blocking next transition
      requestAnimationFrame(() => {
        this.isTransitioning = false;
      });
    }
  }

  nextSlide(): void {
    if (this.isTransitioning) return;
    this.slideTo(this.currentSlide + 1);
  }

  prevSlide(): void {
    if (this.isTransitioning) return;
    this.slideTo(this.currentSlide - 1);
  }

  goToSlide(index: number): void {
    clearInterval(this.intervalId);
    this.slideTo(index + 1); // +1 due to cloned first
    this.restartAutoSlide();
  }

  restartAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  handleKey(event: KeyboardEvent, index: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.goToSlide(index);
    }
  }

  handleSwipe(): void {
    const diff = this.touchStartX - this.touchEndX;
    if (Math.abs(diff) < 30) return;

    clearInterval(this.intervalId);

    if (diff > 0) {
      this.nextSlide();
    } else {
      this.prevSlide();
    }

    this.restartAutoSlide();
  }

  @HostListener('window:resize')
  onResize(): void {
    clearInterval(this.intervalId);
    this.isMobile = window.innerWidth < 768;
    this.setupLoopSlides();
    this.initSlider();
  }
}
