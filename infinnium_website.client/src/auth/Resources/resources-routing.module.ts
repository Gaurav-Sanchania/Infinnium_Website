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
      { path: 'Blogs', component: BlogsListLayoutComponent, },
      { path: 'News-and-Events', component: NewsListLayoutComponent, },
      { path: 'Blogs/:blogTitle/:guid', component: SingleBlogLayoutComponent }, 
      { path: 'News-and-Events/:newsTitle/:guid', component: SingleNewsLayoutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
