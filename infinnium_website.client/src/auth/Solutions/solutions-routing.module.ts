import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Solution1LayoutComponent } from './solution1-layout/solution1-layout.component';

const routes: Routes = [
  {
    path: 'breach-response', component: Solution1LayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionsRoutingModule { }
