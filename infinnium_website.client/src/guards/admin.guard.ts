import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';

    if (isAdminLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/Login']);
      return false;
    }
  }
}
