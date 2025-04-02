import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsLayoutComponent } from './contact-us-layout/contact-us-layout.component';

const routes: Routes = [
  {
    path: 'contact-us', component: ContactUsLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
