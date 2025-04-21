import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AddNewsComponent } from './add-news/add-news.component';
// import { AddImageComponent } from './add-image/add-image.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { AdminGuard } from '../guards/admin.guard';
import { ContactUsLayoutComponent } from './contact-us-layout/contact-us-layout.component';
export { routes as adminRoutes } from './admin-routing.module';

export const routes: Routes = [
  { path: 'Login', component: AdminLoginComponent },
  { path: 'Dashboard', component: AdminDashboardComponent, canActivate: [AdminGuard], canDeactivate: [AdminGuard] },
  { path: 'add-Blog', component: AddBlogComponent, canActivate: [AdminGuard], canDeactivate: [AdminGuard] },
  { path: 'add-News', component: AddNewsComponent, canActivate: [AdminGuard], canDeactivate: [AdminGuard] },
  // { path: 'add-image', component: AddImageComponent, canActivate: [AdminGuard], canDeactivate: [AdminGuard] },
  { path: 'edit-blog/:guid', component: EditBlogComponent, canActivate: [AdminGuard], canDeactivate: [AdminGuard] },
  { path: 'edit-news/:guid', component: EditBlogComponent, canActivate: [AdminGuard], canDeactivate: [AdminGuard] },
  // { path: 'Contact-Us', component: ContactUsLayoutComponent, canActivate: [AdminGuard], canDeactivate: [AdminGuard] }
  { path: 'Dashboard/Contact-Us', component: ContactUsLayoutComponent, canActivate: [AdminGuard], canDeactivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
