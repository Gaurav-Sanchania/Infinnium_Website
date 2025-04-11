import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CookieComponent } from '../auth/Cookies/cookie/cookie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, CookieComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'infinnium_website.client';

  constructor() {
    // console.log(navigator.cookieEnabled);
  }
}
