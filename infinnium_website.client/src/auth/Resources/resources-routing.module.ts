import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export { routes as resourcesRoutes } from './resources-routing.module';

export const routes: Routes = [
  {
    path: 'Resources',
    children: [
      { path: 'Blogs', 
        loadComponent: () => import('./Blogs/blogs-list-layout/blogs-list-layout.component').then( m => m.BlogsListLayoutComponent )
       },
      { path: 'News-and-Events', 
        loadComponent: () => import('./News/news-list-layout/news-list-layout.component').then( m => m.NewsListLayoutComponent )
       },
      { path: 'Blogs/:blogTitle/:guid', 
        loadComponent: () => import('./Blogs/single-blog-layout/single-blog-layout.component').then( m => m.SingleBlogLayoutComponent )
       }, 
      { path: 'News-and-Events/:newsTitle/:guid', 
        loadComponent: () => import('./News/single-news-layout/single-news-layout.component').then( m => m.SingleNewsLayoutComponent )
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
