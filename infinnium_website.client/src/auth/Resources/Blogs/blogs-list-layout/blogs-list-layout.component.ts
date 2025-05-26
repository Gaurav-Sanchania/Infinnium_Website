/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { BlogsListComponent } from '../../blogs-list/blogs-list.component';
import { BlogsService } from '../../../../services/blogsService.service';
import { ScrollIndicatorComponent } from "../../../../shared/components/scroll-indicator/scroll-indicator.component";
import { ScrollToTopComponent } from "../../../../shared/components/scroll-top/scroll-to-top.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-resources-blogs-list-layout',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    BlogsListComponent,
    FooterComponent,
    ScrollIndicatorComponent,
    ScrollToTopComponent,
    NgIf, NgFor
],
  providers: [BlogsService],
  templateUrl: './blogs-list-layout.component.html',
  styleUrl: './blogs-list-layout.component.css',
})
export class BlogsListLayoutComponent implements OnInit {
  constructor(private blogService: BlogsService, private cdr: ChangeDetectorRef) {}

  public blogs: any = [];
  public top3Blogs: any = [];
  public loading = true;

  ngOnInit() {
    this.loadData();
    //console.log(this.top3Blogs);
  }

  async loadData() {
    this.loading = true;
    this.cdr.detectChanges();
    this.top3Blogs = await this.blogService.getTop3Blogs();
    this.blogs = await this.blogService.getAllBlogs();
    this.loading = false;
    this.cdr.detectChanges();
  }
}
