/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-expert-section',
  imports: [],
  templateUrl: './expert-section.component.html',
  styleUrl: './expert-section.component.css'
})
export class ExpertSectionComponent {
  @Input() headingText: string = "Talk to our Experts";
}
