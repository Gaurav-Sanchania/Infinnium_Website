import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsLayoutComponent } from './about-us-layout/about-us-layout.component';
export { routes as aboutUsRoutes } from './about-us-routing.module';

export const routes: Routes = [
  {
    path: 'aboutUs',
    children: [
      { path: '', component: AboutUsLayoutComponent,title: "About - Infinnium" },
      { path: 'member/:name/:guid', 
        loadComponent: () => import('./Members/member-layout/member-layout.component').then( m => m.MemberLayoutComponent),
        title: "About - Infinnium" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
