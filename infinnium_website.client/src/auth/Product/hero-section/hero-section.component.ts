/* eslint-disable @typescript-eslint/no-inferrable-types */
import { CommonModule } from '@angular/common';
import { Component, Input, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-products-hero-section',
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent implements AfterViewInit {
  @Input() product: string = '';

  ngAfterViewInit(): void {
    this.startTypingAnimation();
  }

  startTypingAnimation() {
    const textElement = document.getElementById(
      'search-text'
    ) as unknown as SVGTextElement;
    const fullText = 'Breach Profiler';
    let index = 0;
    let isDeleting = false;

    setInterval(() => {
      if (textElement) {
        if (!isDeleting) {
          textElement.textContent = fullText.substring(0, index + 1);
          index++;
          if (index === fullText.length) {
            isDeleting = true;
          }
        } else {
          textElement.textContent = fullText.substring(0, index - 1);
          index--;
          if (index === 0) {
            isDeleting = false;
          }
        }
      }
    }, 150); // Typing speed: you can reduce for faster
  }
}
