import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Solution1LayoutComponent } from './BreachResponse/solution1-layout/solution1-layout.component';
export { routes as solutionRoutes } from './solutions-routing.module';

export const routes: Routes = [
  {
    path: 'solutions',
    children: [
      {
        path: 'breach-response',
        component: Solution1LayoutComponent,
        title: 'Solutions - Infinnium',
      },
      {
        path: 'unified-information-governance',
        loadComponent: () =>
          import('./UIG/solution2-layout/solution2-layout.component').then(
            (m) => m.Solution2LayoutComponent
          ),
        title: 'Solutions - Infinnium',
      },
      {
        path: 'data-protection',
        loadComponent: () =>
          import('./DSAR/solution3-layout/solution3-layout.component').then(
            (m) => m.Solution3LayoutComponent
          ),
        title: 'Solutions - Infinnium',
      },
      {
        path: 'eDiscovery',
        loadComponent: () =>
          import(
            './eDiscovery/solution4-layout/solution4-layout.component'
          ).then((m) => m.Solution4LayoutComponent),
        title: 'Solutions - Infinnium',
      },
      {
        path: 'automated-redaction',
        loadComponent: () =>
          import(
            './AutomatedRedaction/solution5-layout/solution5-layout.component'
          ).then((m) => m.Solution5LayoutComponent),
        title: 'Solutions - Infinnium',
      },
      {
        path: 'data-mapping',
        loadComponent: () =>
          import(
            './DataMapping/solution6-layout/solution6-layout.component'
          ).then((m) => m.Solution6LayoutComponent),
        title: 'Solutions - Infinnium',
      },
      {
        path: 'data-retention',
        loadComponent: () =>
          import(
            './DataRetention/solution7-layout/solution7-layout.component'
          ).then((m) => m.Solution7LayoutComponent),
        title: 'Solutions - Infinnium',
      },
      {
        path: 'unified-archival',
        loadComponent: () =>
          import(
            './UnifiedArchival/solution8-layout/solution8-layout.component'
          ).then((m) => m.Solution8LayoutComponent),
        title: 'Solutions - Infinnium',
      },
      {
        path: 'data-disposition',
        loadComponent: () =>
          import(
            './DataDiposition/solution9-layout/solution9-layout.component'
          ).then((m) => m.Solution9LayoutComponent),
        title: 'Solutions - Infinnium',
      },
      {
        path: 'legal-hold',
        loadComponent: () =>
          import(
            './LegalHold/solution10-layout/solution10-layout.component'
          ).then((m) => m.Solution10LayoutComponent),
        title: 'Solutions - Infinnium',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionsRoutingModule {}
