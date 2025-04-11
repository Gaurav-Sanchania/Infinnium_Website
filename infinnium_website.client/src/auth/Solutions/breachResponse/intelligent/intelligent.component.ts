import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-intelligent',
  imports: [],
  templateUrl: './intelligent.component.html',
  styleUrl: './intelligent.component.css'
})
export class IntelligentComponent {
  toggleDescription(id: number): void {
    const desc = document.getElementById(`desc-${id}`);
    const button = document.querySelector(`[data-id="${id}"]`) as HTMLButtonElement;

    if (desc && button) {
      const isExpanded = desc.classList.contains('slide-toggle');

      if (isExpanded) {
        // COLLAPSING — set to full height first
        const fullHeight = desc.scrollHeight;
        desc.style.maxHeight = `${fullHeight}px`; // Set current height to enable transition
        desc.classList.remove('truncate-text'); // Prevent line clamping during animation

        // Trigger collapse in next frame
        requestAnimationFrame(() => {
          desc.style.maxHeight = '4.5em';
        });

        button.textContent = 'Read More ↓';

        // After transition ends
        setTimeout(() => {
          desc.classList.remove('slide-toggle');
          desc.classList.add('truncate-text');
          desc.style.maxHeight = '';
        }, 400);

      } else {
        // EXPANDING
        desc.classList.remove('truncate-text');
        desc.classList.add('slide-toggle');

        // Collapse height start
        desc.style.maxHeight = '4.5em';

        // Expand to full height in next frame
        requestAnimationFrame(() => {
          desc.style.maxHeight = `${desc.scrollHeight}px`;
        });

        button.textContent = 'Read Less ↑';

        // Cleanup max-height so the content can grow naturally
        setTimeout(() => {
          desc.style.maxHeight = 'none';
        }, 400);
      }
    }
  }


}
