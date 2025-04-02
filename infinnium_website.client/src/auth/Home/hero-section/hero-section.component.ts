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

  icons: string[] = [
    'fab fa-twitter',
    'fab fa-instagram',
    'fab fa-linkedin-in',
    'fab fa-github',
    'fab fa-youtube',
    'fab fa-pinterest',
    'fab fa-snapchat-ghost',
    'fab fa-skype',
    'fab fa-android',
    'fab fa-dribbble',
    'fab fa-tumblr',
    'fab fa-vimeo-v',
    'fab fa-flickr',
    'fab fa-reddit-alien',
    'fab fa-whatsapp',
    'fab fa-telegram-plane',
    'fab fa-discord',
    'fab fa-slack-hash',
    'fab fa-medium-m',
  ];

  currentPhraseIndex = 0;

  ngOnInit() {
    this.animatePhrase();
    this.addIconsToGels();
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

  addIconsToGels() {
    const gels = document.querySelectorAll('.gel:not(.center-gel)');
    gels.forEach((gel, index) => {
      const icon = document.createElement('i');
      icon.className = this.icons[index % this.icons.length];
      gel.appendChild(icon);
    });

    // Handle center hexagon separately
    const centerGel = document.querySelector('.center-gel');
    if (centerGel) {
      const svgString = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
        <style type="text/css">
          .st0{fill:#2A9D8F;}
          .st1{fill:#264653;}
          .st2{fill:none;}
          .st3{fill:#E76F51;}
          .st4{fill:#E77051;}
        </style>
        <path class="st0" d="M12.5,3.2c0.5,0,1.1,0.1,1.6,0.2V0.2C13.6,0.1,13.1,0,12.5,0c-0.5,0-1,0.1-1.4,0.1v3.2  C11.6,3.2,12,3.2,12.5,3.2z"/>
        <path class="st1" d="M7.9,4.4V0.9C3.1,2.8,0,7.4,0,12.5c0,0.5,0,1,0.1,1.5h7.8v-3.2H3.3C3.8,8.1,5.5,5.8,7.9,4.4z"/>
        <path class="st1" d="M24.9,10.8h-7.5V14h4.3c-0.7,4.5-4.6,7.8-9.2,7.8c-3.3,0-6.4-1.8-8.1-4.7H0.9c2.5,6.4,9.8,9.6,16.2,7  c4.8-1.9,7.9-6.5,7.9-11.7C25,11.9,25,11.3,24.9,10.8z"/>
        <path class="st4" d="M14.2,6.5c-0.5-0.1-1-0.2-1.5-0.2c-0.5,0-1,0.1-1.5,0.2v12.1c0.5,0.1,1,0.1,1.5,0.1c0.5,0,1,0,1.5-0.1V6.5z"/>
      </svg>`;

      // Create SVG container
      const svgContainer = document.createElement('div');
      svgContainer.innerHTML = svgString;
      svgContainer.style.position = 'absolute';
      svgContainer.style.top = '50%';
      svgContainer.style.left = '50%';
      svgContainer.style.transform = 'translate(-50%, -50%) scale(0.15)';
      svgContainer.style.zIndex = '10';

      // Add SVG to center hexagon WITHOUT removing the hexagon
      centerGel.appendChild(svgContainer);

      // Remove any potential icons from center hexagon
      const centerIcons = centerGel.getElementsByTagName('i');
      while (centerIcons.length > 0) {
        centerIcons[0].remove();
      }
    }
  }
}
