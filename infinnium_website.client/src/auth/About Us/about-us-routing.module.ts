import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsLayoutComponent } from './about-us-layout/about-us-layout.component';
import { MemberLayoutComponent } from './Members/member-layout/member-layout.component';
export { routes as aboutUsRoutes } from './about-us-routing.module';

export const routes: Routes = [
  {
    path: 'aboutUs',
    children: [
      { path: '', component: AboutUsLayoutComponent },
      { path: 'member/:name/:guid', component: MemberLayoutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
