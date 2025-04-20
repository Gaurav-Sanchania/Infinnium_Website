import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-solutions-hero-section',
  imports: [RouterLink, CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements AfterViewInit {
  @Input() solution = "";

  constructor(private http: HttpClient, private el: ElementRef) { }

  ngAfterViewInit() {
    if (this.solution === 'Breach Response') {
      this.http.get('assets/icons/breach_response_icon2.svg', { responseType: 'text' })
        .subscribe(svgText => {
          this.el.nativeElement.querySelector('.svg-container').innerHTML = svgText;
        });
    }
    if (this.solution === 'unified information governance') {
      this.http.get('assets/icons/uig_icon.svg', { responseType: 'text' })
        .subscribe(svgText => {
          this.el.nativeElement.querySelector('.svg-container').innerHTML = svgText;
        });
    }
    if (this.solution === 'Data Protection / DSAR') {
      this.http.get('assets/icons/dsar_icon.svg', { responseType: 'text' })
        .subscribe(svgText => {
          this.el.nativeElement.querySelector('.svg-container').innerHTML = svgText;
        });
    }
    if (this.solution === 'eDiscovery') {
      this.http.get('assets/icons/eDiscovery_icon.svg', { responseType: 'text' })
        .subscribe(svgText => {
          this.el.nativeElement.querySelector('.svg-container').innerHTML = svgText;
        });
    }
    if (this.solution === 'automated redaction') {
      this.http.get('assets/icons/automated_redaction_icon2.svg', { responseType: 'text' })
        .subscribe(svgText => {
          this.el.nativeElement.querySelector('.svg-container').innerHTML = svgText;
        });
    }
    if (this.solution === 'Data mapping') {
      this.http.get('assets/icons/data_mapping_icon.svg', { responseType: 'text' })
        .subscribe(svgText => {
          this.el.nativeElement.querySelector('.svg-container').innerHTML = svgText;
        });
    }
    if (this.solution === 'Data retention') {
      this.http.get('assets/icons/data_retention_icon.svg', { responseType: 'text' })
        .subscribe(svgText => {
          this.el.nativeElement.querySelector('.svg-container').innerHTML = svgText;
        });
    }
    if (this.solution === 'Unified archival') {
      this.http.get('assets/icons/unified_archival_icon.svg', { responseType: 'text' })
        .subscribe(svgText => {
          this.el.nativeElement.querySelector('.svg-container').innerHTML = svgText;
        });
    }
    if (this.solution === 'Data disposition') {
      this.http.get('assets/icons/data_disposition_icon.svg', { responseType: 'text' })
        .subscribe(svgText => {
          this.el.nativeElement.querySelector('.svg-container').innerHTML = svgText;
        });
    }
    if (this.solution === 'Legal hold') {
      this.http.get('assets/icons/legal_hold_icon.svg', { responseType: 'text' })
        .subscribe(svgText => {
          this.el.nativeElement.querySelector('.svg-container').innerHTML = svgText;
        });
    }
  }
}
