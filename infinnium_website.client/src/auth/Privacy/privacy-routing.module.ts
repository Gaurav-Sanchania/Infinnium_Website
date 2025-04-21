import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export { routes as policyRoutes } from './privacy-routing.module';

export const routes: Routes = [
  { path: 'Privacy-Policy', loadComponent: () => import('./privacy-policy/privacy-policy.component').then( m => m.PrivacyPolicyComponent ) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacyRoutingModule { }
