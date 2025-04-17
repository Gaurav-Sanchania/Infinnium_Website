import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthSessionService } from '../../guards/authSession';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [RouterLink, RouterOutlet, CommonModule, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private route: Router, private auth: AuthSessionService) {}

  clearLocalStorage() {
    setTimeout(() => {
      this.auth.clearToken();
      this.route.navigate(['/Login']);
    }, 100);
  }
}
