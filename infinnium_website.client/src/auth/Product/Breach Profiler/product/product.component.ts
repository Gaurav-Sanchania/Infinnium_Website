import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-products-breach-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  toggleDescription(id: number): void {
    const desc = document.getElementById(`desc-${id}`);
    const button = document.querySelector(`[data-id="${id}"]`) as HTMLButtonElement;

    if (desc && button) {
      const isExpanded = desc.classList.contains('slide-toggle') && !desc.classList.contains('collapsing');

      if (isExpanded) {
        // Start collapse
        desc.classList.add('collapsing');
        button.textContent = 'Read More ↓';

        // After animation ends, restore original truncate style
        setTimeout(() => {
          desc.classList.remove('slide-toggle', 'collapsing');
          desc.classList.add('truncate-text');
        }, 500);
      } else {
        // Remove truncate and expand
        desc.classList.remove('truncate-text');
        desc.classList.add('slide-toggle');
        button.textContent = 'Read Less ↑';
      }
    }
  }


}
