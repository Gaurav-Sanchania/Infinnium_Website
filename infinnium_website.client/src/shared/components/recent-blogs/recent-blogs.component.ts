/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogsService } from '../../../services/blogsService.service';
import { NewsService } from '../../../services/newsService.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-recent-blogs',
  imports: [RouterLink, CommonModule],
  providers: [BlogsService],
  templateUrl: './recent-blogs.component.html',
  styleUrl: './recent-blogs.component.css',
})
export class RecentBlogsComponent implements OnInit {
  constructor(
    private blogsService: BlogsService,
    private newsService: NewsService
  ) {}

  public recentBlogs: any = [];
  public recentNews: any = [];

  async ngOnInit() {
    this.recentBlogs = await this.blogsService.getTop3Blogs();
    this.recentNews = await this.newsService.getTop3News();
  }

  slugify(str: string) {
    return str
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/--+/g, '-'); // Collapse multiple dashes
  }
}
