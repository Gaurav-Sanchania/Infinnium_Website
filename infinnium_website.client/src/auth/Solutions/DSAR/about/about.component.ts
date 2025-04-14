import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-dsar-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  toggleDescription(id: number): void {
    const descEl = document.getElementById(`desc-${id}`);
    const button = document.querySelector(`[data-id="${id}"]`) as HTMLButtonElement;
    if (!descEl || !button) return;

    if (descEl.classList.contains('expanded')) {
      // Collapse: set current height explicitly, then animate back to collapsed height.
      descEl.style.maxHeight = descEl.scrollHeight + 'px';
      // Force the browser to recognize the current height before starting the transition.
      requestAnimationFrame(() => {
        descEl.style.maxHeight = '4.5em'; // This is the collapsed height (≈ 3 lines)
      });
      descEl.classList.remove('expanded');
      button.textContent = 'Read More →';
    } else {
      // Expand: start from collapsed height.
      // (Optional: set the maxHeight explicitly in case it was auto)
      descEl.style.maxHeight = '4.5em';
      // Force a reflow to ensure the starting height is applied.
      void descEl.offsetHeight;
      // Then get the full height and set it.
      const fullHeight = descEl.scrollHeight + 'px';
      descEl.style.maxHeight = fullHeight;
      descEl.classList.add('expanded');
      button.textContent = 'Read Less ↑';
      // After the animation, remove the inline max-height so that the element naturally adjusts if needed.
      setTimeout(() => {
        descEl.style.maxHeight = 'none';
      }, 500);
    }
  }
}
