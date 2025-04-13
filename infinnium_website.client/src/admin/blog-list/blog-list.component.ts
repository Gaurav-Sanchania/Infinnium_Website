/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsService } from '../../services/blogsService.service';
import { NewsService } from '../../services/newsService.service';

@Component({
  selector: 'app-admin-blog-list',
  imports: [CommonModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit {
  public blogs: any = [];
  public news: any = [];
  showDeletePopup = false;
  showEditPopup = false;
  
  constructor(private blogService: BlogsService, private newsService: NewsService, private route: Router) { }

  async ngOnInit() {
    this.blogs = await this.blogService.getAllBlogs();
    // console.log(this.blogs);
    this.news = await this.newsService.getAllNews();
  }

  editBlog(id: number) {
    this.showEditPopup = true;
  }

  deleteBlog(id: number) {
    this.showDeletePopup = true;
  }
  confirmDelete() {

  }

  closePopup(): void {
    this.showDeletePopup = false;
    this.showEditPopup = false;
  }
}
