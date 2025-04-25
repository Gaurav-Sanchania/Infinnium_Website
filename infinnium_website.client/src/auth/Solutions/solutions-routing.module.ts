import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { Solution1LayoutComponent } from './BreachResponse/solution1-layout/solution1-layout.component';
export { routes as solutionRoutes } from './solutions-routing.module';

export const routes: Routes = [
  {
    path: 'solutions',
    children: [
      { path: 'breach-response', component: Solution1LayoutComponent },
      { path: 'unified-information-governance',
        loadComponent: () => import('./UIG/solution2-layout/solution2-layout.component').then( m => m.Solution2LayoutComponent )
      },
      { path: 'data-protection', 
        loadComponent: () => import('./DSAR/solution3-layout/solution3-layout.component').then( m => m.Solution3LayoutComponent )
      },
      { path: 'eDiscovery', 
        loadComponent: () => import('./eDiscovery/solution4-layout/solution4-layout.component').then( m => m.Solution4LayoutComponent )
       },
      { path: 'automated-redaction', 
        loadComponent: () => import('./AutomatedRedaction/solution5-layout/solution5-layout.component').then( m => m.Solution5LayoutComponent )
       },
      { path: 'data-mapping', 
        loadComponent: () => import('./DataMapping/solution6-layout/solution6-layout.component').then( m => m.Solution6LayoutComponent )
      },
      { path: 'data-retention', 
        loadComponent: () => import('./DataRetention/solution7-layout/solution7-layout.component').then( m => m.Solution7LayoutComponent )
       },
      { path: 'unified-archival', 
        loadComponent: () => import('./UnifiedArchival/solution8-layout/solution8-layout.component').then( m => m.Solution8LayoutComponent )
       },
      { path: 'data-disposition', 
        loadComponent: () => import('./DataDiposition/solution9-layout/solution9-layout.component').then( m => m.Solution9LayoutComponent )
       },
      { path: 'legal-hold', 
        loadComponent: () => import('./LegalHold/solution10-layout/solution10-layout.component').then( m => m.Solution10LayoutComponent )
       },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionsRoutingModule { }
