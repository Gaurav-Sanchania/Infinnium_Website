import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsListLayoutComponent } from './Blogs/blogs-list-layout/blogs-list-layout.component';
import { NewsListLayoutComponent } from './News/news-list-layout/news-list-layout.component';
import { SingleBlogLayoutComponent } from './Blogs/single-blog-layout/single-blog-layout.component';
import { SingleNewsLayoutComponent } from './News/single-news-layout/single-news-layout.component';
export { routes as resourcesRoutes } from './resources-routing.module';

export const routes: Routes = [
  {
    path: 'Resources',
    children: [
      { path: 'Blogs', component: BlogsListLayoutComponent, children: [
        { path: 'blog1', component: SingleBlogLayoutComponent },
      ] },
      { path: 'News-and-Events', component: NewsListLayoutComponent, children: [
        { path: 'news1', component: SingleNewsLayoutComponent }
      ] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
