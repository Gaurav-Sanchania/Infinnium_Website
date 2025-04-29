import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export { routes as termsRoutes } from './terms-routing.module';

export const routes: Routes = [
  { path: 'terms-of-use', loadComponent: () => import('./terms/terms.component').then( m => m.TermsComponent ),
    title: "ToU - Infinnium"
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsRoutingModule { }
