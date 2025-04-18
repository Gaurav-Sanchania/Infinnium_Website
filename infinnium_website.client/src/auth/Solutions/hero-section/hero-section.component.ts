import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
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

  constructor(private http: HttpClient, private el: ElementRef) { }

  ngOnInit() {
    if (this.solution === 'Breach Response') {
      this.http.get('public/breach_response_icon2.svg', { responseType: 'text' })
        .subscribe(svgText => {
          this.el.nativeElement.querySelector('.svg-container').innerHTML = svgText;
        });
    }
  }
}
