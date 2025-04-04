import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsLayoutComponent } from './contact-us-layout/contact-us-layout.component';
export { routes as contactUsRoutes } from './contact-us-routing.module';

export const routes: Routes = [
  {
    path: 'ContactUs', component: ContactUsLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
