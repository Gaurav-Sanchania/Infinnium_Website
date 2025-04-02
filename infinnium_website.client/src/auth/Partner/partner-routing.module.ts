import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerLayoutComponent } from './partner-layout/partner-layout.component';

const routes: Routes = [
  {
    path: 'partner', component: PartnerLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerRoutingModule { }
