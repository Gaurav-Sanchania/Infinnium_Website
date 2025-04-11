import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsComponent } from './terms/terms.component';
export { routes as termsRoutes } from './terms-routing.module';

export const routes: Routes = [
  { path: 'Terms-of-use', component: TermsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsRoutingModule { }
