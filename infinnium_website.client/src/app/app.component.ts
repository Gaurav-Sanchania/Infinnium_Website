import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
  styleUrl: './app.component.css'
})
export class AppComponent {
   title = 'infinnium_website.client';

   constructor(private route: ActivatedRoute) {
  }
}
