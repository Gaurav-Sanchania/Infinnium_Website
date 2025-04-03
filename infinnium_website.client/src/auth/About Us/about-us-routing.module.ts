import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsLayoutComponent } from './about-us-layout/about-us-layout.component';
import { MemberLayoutComponent } from './Members/member-layout/member-layout.component';

const routes: Routes = [
  {
    path: 'about-us', component: AboutUsLayoutComponent
  },
  {
    path: 'member', component: MemberLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
