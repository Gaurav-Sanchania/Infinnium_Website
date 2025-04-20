import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-data-disposition-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  toggleDescription(id: number): void {
    const desc = document.getElementById(`desc-${id}`);
    const button = document.querySelector(`[data-id="${id}"]`) as HTMLButtonElement;

    if (desc && button) {
      desc.classList.toggle('truncate-text');
      button.textContent = desc.classList.contains('truncate-text')
        ? 'Read More →'
        : 'Read Less ↑';
    }
  }
}
