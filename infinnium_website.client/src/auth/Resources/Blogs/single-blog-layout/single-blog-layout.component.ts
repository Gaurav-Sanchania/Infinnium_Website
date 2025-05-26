/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { SingleBlogComponent } from '../../single-blog/single-blog.component';
import { RecentBlogsComponent } from '../../../../shared/components/recent-blogs/recent-blogs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { BlogsService } from '../../../../services/blogsService.service';
import { ActivatedRoute } from '@angular/router';
import { ScrollToTopComponent } from "../../../../shared/components/scroll-top/scroll-to-top.component";
import { ScrollIndicatorComponent } from "../../../../shared/components/scroll-indicator/scroll-indicator.component";
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-single-blog-layout',
  imports: [
    HeroSectionComponent,
    SingleBlogComponent,
    RecentBlogsComponent,
    HeaderComponent,
    FooterComponent,
    ScrollToTopComponent,
    ScrollIndicatorComponent,
    NgIf
],
  providers: [BlogsService],
  templateUrl: './single-blog-layout.component.html',
  styleUrl: './single-blog-layout.component.css',
})
export class SingleBlogLayoutComponent implements OnInit {
  @Input() blogId!: string;
  public guid: string = '';
  public loading = true;
  constructor(
    private blogService: BlogsService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  public top3Blogs: any = [];
  public blog: any = [];
  

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.loading = true;
    // this.cdr.detectChanges();
    this.top3Blogs = await this.blogService.getTop3Blogs();
    // this.cdr.detectChanges();
    // this.cdr.detectChanges();
    //const blogTitle = this.route.snapshot.paramMap.get('blogTitle');
    const guidFromRoute = this.route.snapshot.paramMap.get('guid');

    if (guidFromRoute) {
      this.guid = guidFromRoute;
      // this.blog = await this.blogService.getBlogDetails(this.guid);
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
    this.loading = false;
    // this.cdr.detectChanges();
  }
}
