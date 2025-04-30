/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, OnInit } from '@angular/core';
import { SingleBlogComponent } from '../../single-blog/single-blog.component';
import { RecentBlogsComponent } from '../../../../shared/components/recent-blogs/recent-blogs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { BlogsService } from '../../../../services/blogsService.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-single-blog-layout',
  imports: [
    HeroSectionComponent,
    SingleBlogComponent,
    RecentBlogsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [BlogsService],
  templateUrl: './single-blog-layout.component.html',
  styleUrl: './single-blog-layout.component.css',
})
export class SingleBlogLayoutComponent implements OnInit {
  @Input() blogId!: string;
  public guid: string = '';
  constructor(
    private blogService: BlogsService,
    private route: ActivatedRoute
  ) {}

  public top3Blogs: any = [];
  public blog: any = [];

  async ngOnInit() {
    this.top3Blogs = await this.blogService.getTop3Blogs();

    //const blogTitle = this.route.snapshot.paramMap.get('blogTitle');
    const guidFromRoute = this.route.snapshot.paramMap.get('guid');

    if (guidFromRoute) {
      this.guid = guidFromRoute;
      this.blog = await this.blogService.getBlogDetails(this.guid);
      if (
        this.blog?.publishedDate &&
        typeof this.blog.publishedDate === 'string'
      ) {
        this.blog.publishedDate = new Date(this.blog.publishedDate);
      }
    } else {
      // console.error('GUID not found in route!');
      return;
    }
  }
}
