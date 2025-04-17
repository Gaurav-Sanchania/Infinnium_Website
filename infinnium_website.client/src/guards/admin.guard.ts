import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminDashboardComponent } from '../admin/admin-dashboard/admin-dashboard.component';
import { AuthSessionService } from './authSession';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthSessionService) {}

  canActivate(): boolean {
    // const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/Login']);
      return false;
    }
  }

  canDeactivate(component: AdminDashboardComponent): boolean {
    localStorage.removeItem('isAdminLoggedIn');
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
