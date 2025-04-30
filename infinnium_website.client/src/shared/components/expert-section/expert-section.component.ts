/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-expert-section',
  imports: [RouterLink],
  templateUrl: './expert-section.component.html',
  styleUrl: './expert-section.component.css',
})
export class ExpertSectionComponent {
  @Input() headingText: string = 'Talk to our Experts';
}
