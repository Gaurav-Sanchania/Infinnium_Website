import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements OnInit {
  @ViewChild('phraseContainer', { static: true }) phraseContainer!: ElementRef;

  phrases: string[] = [
    "Data Protection",
    "Breach Response",
    "Data Governance",
    "Data Security",
    "Data Processing",
    "Data Discovery",
    "Automation & AI"
  ];

  currentPhraseIndex = 0;

  ngOnInit() {
    this.animatePhrase();
  }

  animatePhrase() {
    const container = this.phraseContainer.nativeElement;

    container.textContent = this.phrases[this.currentPhraseIndex];
    setTimeout(() => container.style.opacity = '1', 100);
    setTimeout(() => container.style.opacity = '0', 3500);

    setTimeout(() => {
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      this.animatePhrase();
    }, 4000);
  }
}
