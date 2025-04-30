import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
export { routes as adminRoutes } from './admin-routing.module';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./admin-login/admin-login.component').then(
        (m) => m.AdminLoginComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./admin-dashboard/admin-dashboard.component').then(
        (m) => m.AdminDashboardComponent
      ),
    canActivate: [AdminGuard],
    canDeactivate: [AdminGuard],
  },
  {
    path: 'dashboard/add-Blog',
    loadComponent: () =>
      import('./add-blog/add-blog.component').then((m) => m.AddBlogComponent),
    canActivate: [AdminGuard],
    canDeactivate: [AdminGuard],
  },
  {
    path: 'dashboard/add-News',
    loadComponent: () =>
      import('./add-news/add-news.component').then((m) => m.AddNewsComponent),
    canActivate: [AdminGuard],
    canDeactivate: [AdminGuard],
  },
  {
    path: 'dashboard/edit-blog/:guid',
    loadComponent: () =>
      import('./edit-blog/edit-blog.component').then(
        (m) => m.EditBlogComponent
      ),
    canActivate: [AdminGuard],
    canDeactivate: [AdminGuard],
  },
  {
    path: 'dashboard/edit-news/:guid',
    loadComponent: () =>
      import('./edit-blog/edit-blog.component').then(
        (m) => m.EditBlogComponent
      ),
    canActivate: [AdminGuard],
    canDeactivate: [AdminGuard],
  },
  {
    path: 'dashboard/contact-Us',
    loadComponent: () =>
      import('./contact-us-layout/contact-us-layout.component').then(
        (m) => m.ContactUsLayoutComponent
      ),
    canActivate: [AdminGuard],
    canDeactivate: [AdminGuard],
  },
  {
    path: 'dashboard/update-members',
    loadComponent: () =>
      import('./founders-layout/founders-layout.component').then(
        (m) => m.FoundersLayoutComponent
      ),
    canActivate: [AdminGuard],
    canDeactivate: [AdminGuard],
  },
  {
    path: 'dashboard/update-members/:name/:guid',
    loadComponent: () =>
      import('./edit-founders/edit-founders.component').then(
        (m) => m.EditFoundersComponent
      ),
    canActivate: [AdminGuard],
    canDeactivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
