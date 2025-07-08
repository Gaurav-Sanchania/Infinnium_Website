/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NewsService } from '../../../services/newsService.service';
import { BlogsService } from '../../../services/blogsService.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-single-blog',
  imports: [RouterLink, CommonModule],
  providers: [NewsService, BlogsService],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.css',
})
export class SingleBlogComponent implements OnInit {
  blog: any = [];
  news: any = [];
  public guid = '';
  isContentLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogsService,
    private newsService: NewsService,
    private sanitizer: DomSanitizer
  ) {}

  async ngOnInit() {
    this.isContentLoaded = false;
    const guidFromRoute = this.route.snapshot.paramMap.get('guid');
    // console.log(guidFromRoute);
    if (guidFromRoute) {
      // console.log("Inside If");
      const url = this.router.url;
      this.guid = guidFromRoute;
      //console.log(url);

      if (url.startsWith('/resources/blogs')) {
        this.blog = await this.blogService.getBlogDetails(this.guid);
        this.blog.description = this.blog.description.replace(/&nbsp;/g, ' ');
        this.blog.description = this.sanitizer.bypassSecurityTrustHtml(
          this.blog.description
        );
        //console.log(this.blog);

      } else {
        this.news = await this.newsService.getNewsDetails(this.guid);
        this.news.description = this.news.description.replace(/&nbsp;/g, ' ');
        this.news.description = this.sanitizer.bypassSecurityTrustHtml(
          this.news.description
        );
        //console.log(this.news);
      }
      this.isContentLoaded = true;
    } else {
      //console.error('GUID not found in route!');
      return;
    }
  }
}
