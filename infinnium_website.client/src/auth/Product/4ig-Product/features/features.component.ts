import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-features',
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  toggleDescription(id: number): void {
    const desc = document.getElementById(`desc-${id}`);
    const button = document.querySelector(`[data-id="${id}"]`) as HTMLButtonElement;

    if (desc && button) {
      const isExpanded = desc.classList.contains('slide-toggle');

      if (isExpanded) {
        // COLLAPSING
        const fullHeight = desc.scrollHeight;
        desc.style.maxHeight = `${fullHeight}px`; // Start from current height
        desc.classList.remove('truncate-text');

        requestAnimationFrame(() => {
          desc.style.maxHeight = '4.5em'; // Collapse to truncated height
        });

        button.textContent = 'Read More ↓';

        setTimeout(() => {
          desc.classList.remove('slide-toggle');
          desc.classList.add('truncate-text');
          desc.style.maxHeight = '';
        }, 400);

      } else {
        // EXPANDING
        desc.classList.remove('truncate-text');
        desc.classList.add('slide-toggle');
        desc.style.maxHeight = '4.5em'; // Start collapsed

        requestAnimationFrame(() => {
          desc.style.maxHeight = `${desc.scrollHeight}px`; // Animate open
        });

        button.textContent = 'Read Less ↑';

        setTimeout(() => {
          desc.style.maxHeight = 'none'; // Let content grow naturally
        }, 400);
      }
    }
  }

}
