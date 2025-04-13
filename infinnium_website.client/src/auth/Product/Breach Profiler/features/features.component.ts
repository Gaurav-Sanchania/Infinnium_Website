import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-products-breach-features',
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
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
