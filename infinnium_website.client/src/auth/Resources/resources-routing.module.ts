import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export { routes as resourcesRoutes } from './resources-routing.module';

export const routes: Routes = [
  {
    path: 'resources',
    children: [
      {
        path: 'blogs',
        loadComponent: () =>
          import('./Blogs/blogs-list-layout/blogs-list-layout.component').then(
            (m) => m.BlogsListLayoutComponent
          ),
        title: 'Resources - Infinnium',
      },
      {
        path: 'news-and-events',
        loadComponent: () =>
          import('./News/news-list-layout/news-list-layout.component').then(
            (m) => m.NewsListLayoutComponent
          ),
        title: 'Resources - Infinnium',
      },
      {
        path: 'blogs/:blogTitle/:guid',
        loadComponent: () =>
          import(
            './Blogs/single-blog-layout/single-blog-layout.component'
          ).then((m) => m.SingleBlogLayoutComponent),
        title: 'Resources - Infinnium',
      },
      {
        path: 'news-and-events/:newsTitle/:guid',
        loadComponent: () =>
          import('./News/single-news-layout/single-news-layout.component').then(
            (m) => m.SingleNewsLayoutComponent
          ),
        title: 'Resources - Infinnium',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesRoutingModule {}
