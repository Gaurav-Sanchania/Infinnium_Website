/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-solutions-hero-section',
  imports: [RouterLink, CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements OnInit {
  @Input() solution = "";

  ngOnInit() {
    if(this.solution == 'Legal hold') {
      const ring = document.getElementById("rotating-ring");
      const ring2 = document.querySelector('rotating-ring');
      let angle = 0;
      function rotateRing() {
        angle = (angle + 1) % 360;
        ring2!.setAttribute("transform", `rotate(${angle} 0 0)`);

        requestAnimationFrame(rotateRing);
      }
      rotateRing();
    }
  }
}
