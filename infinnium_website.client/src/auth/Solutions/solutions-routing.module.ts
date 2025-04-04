import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Solution5LayoutComponent } from './AutomatedRedaction/solution5-layout/solution5-layout.component';
import { Solution9LayoutComponent } from './DataDiposition/solution9-layout/solution9-layout.component';
import { Solution6LayoutComponent } from './DataMapping/solution6-layout/solution6-layout.component';
import { Solution7LayoutComponent } from './DataRetention/solution7-layout/solution7-layout.component';
import { Solution3LayoutComponent } from './DSAR/solution3-layout/solution3-layout.component';
import { Solution4LayoutComponent } from './eDiscovery/solution4-layout/solution4-layout.component';
import { Solution10LayoutComponent } from './LegalHold/solution10-layout/solution10-layout.component';
import { Solution2LayoutComponent } from './UIG/solution2-layout/solution2-layout.component';
import { Solution8LayoutComponent } from './UnifiedArchival/solution8-layout/solution8-layout.component';
import { Solution1LayoutComponent } from './BreachResponse/solution1-layout/solution1-layout.component';
export { routes as solutionRoutes } from './solutions-routing.module';

export const routes: Routes = [
  {
    path: 'Solutions',
    children: [
      { path: 'breach-response', component: Solution1LayoutComponent },
      { path: 'unified-information-governance', component: Solution2LayoutComponent},
      { path: 'data-protection', component: Solution3LayoutComponent},
      { path: 'eDiscovery', component: Solution4LayoutComponent },
      { path: 'automated-redaction', component: Solution5LayoutComponent },
      { path: 'data-mapping', component: Solution6LayoutComponent},
      { path: 'data-retention', component: Solution7LayoutComponent },
      { path: 'unified-archival', component: Solution8LayoutComponent },
      { path: 'data-disposition', component: Solution9LayoutComponent },
      { path: 'legal-hold', component: Solution10LayoutComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionsRoutingModule { }
