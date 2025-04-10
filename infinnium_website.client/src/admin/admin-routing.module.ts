import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AddNewsComponent } from './add-news/add-news.component';
// import { AdminGuard } from './admin.guard';
export { routes as adminRoutes } from './admin-routing.module';

export const routes: Routes = [
  { path: 'Login', component: AdminLoginComponent },
  { path: 'Dashboard', component: AdminDashboardComponent },
  // { path: 'Dashboard', component: AdminDashboardComponent, canActivate: [AdminGuard] }
  { path: 'add-Blog', component: AddBlogComponent },
  { path: 'add-News', component: AddNewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
