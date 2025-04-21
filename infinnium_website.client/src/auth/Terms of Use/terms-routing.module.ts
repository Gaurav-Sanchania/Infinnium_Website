import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export { routes as termsRoutes } from './terms-routing.module';

export const routes: Routes = [
  { path: 'Terms-of-use', loadComponent: () => import('./terms/terms.component').then( m => m.TermsComponent ) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsRoutingModule { }
