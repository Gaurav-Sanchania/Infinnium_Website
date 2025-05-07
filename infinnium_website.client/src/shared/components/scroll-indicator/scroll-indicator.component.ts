import { Component, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-indicator',
    imports: [CommonModule],
  standalone: true,
  templateUrl: './scroll-indicator.component.html',
  styleUrl: './scroll-indicator.component.css'
})
export class ScrollIndicatorComponent implements AfterViewInit, OnDestroy {
  private scrollListener!: () => void;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const indicator = document.getElementById('scroll-indicator');
    this.scrollListener = this.renderer.listen('window', 'scroll', () => {
      if (!indicator) return;
      const shouldHide = window.scrollY > 50;
      this.renderer.setStyle(indicator, 'opacity', shouldHide ? '0' : '1');
      this.renderer.setStyle(indicator, 'pointerEvents', shouldHide ? 'none' : 'auto');
    });
  }

  ngOnDestroy(): void {
    if (this.scrollListener) {
      this.scrollListener();
    }
  }
}
