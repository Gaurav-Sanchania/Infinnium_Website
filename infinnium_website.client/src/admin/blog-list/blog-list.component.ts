/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BlogsService } from '../../services/blogsService.service';
import { NewsService } from '../../services/newsService.service';

@Component({
  selector: 'app-admin-blog-list',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent implements OnInit {
  public blogs: any = [];
  public filteredBlogs: any = [];
  public news: any = [];
  public filteredNews: any = [];
  public selectedStatus = 'all'; // Default filter selection

  showDeletePopup = false;
  showEditPopup = false;
  showEditNewsPopup = false;

  public blog_edit: any = [];
  public blog_delete!: number;

  public news_edit: any = [];
  public news_delete!: number;

  constructor(
    private blogService: BlogsService,
    private newsService: NewsService,
    private route: Router
  ) {}

  async ngOnInit() {
    this.blogs = await this.blogService.getAllBlogsAdmin();
    this.news = await this.newsService.getAllNewsAdmin();
    this.filterBlogs(); // Apply default filter
     this.filteredNews = this.news; // Initialize with all news
  }

  filterBlogs(): void {
    if (this.selectedStatus === 'active') {
      this.filteredBlogs = this.blogs.filter((blog: any) => blog.isActive);
    } else if (this.selectedStatus === 'inactive') {
      this.filteredBlogs = this.blogs.filter((blog: any) => !blog.isActive);
    } else {
      this.filteredBlogs = this.blogs;
    }
  }

  // Method to filter the news based on the selected status
  filterNews() {
    if (this.selectedStatus === 'all') {
      this.filteredNews = this.news;
    } else if (this.selectedStatus === 'active') {
      this.filteredNews = this.news.filter((newsItem: any) => newsItem.isActive);
    } else if (this.selectedStatus === 'inactive') {
      this.filteredNews = this.news.filter((newsItem: any) => !newsItem.isActive);
    }
  }

  toggleEditBlog(event: Event, blog: any) {
    event.preventDefault();
    this.showEditPopup = true;
    this.blog_edit = blog;
  }

  editBlog(blog: any) {
    this.showEditPopup = true;
    this.blog_edit = blog;
  }

  navigateEditBlog() {
    this.closePopup();
    this.route.navigateByUrl(`dashboard/edit-blog/${this.blog_edit.guid}`);
  }

  toggleEditNews(event: Event, blog: any) {
    event.preventDefault();
    this.showEditNewsPopup = true;
    this.news_edit = blog;
  }

  editNews(blog: any) {
    this.showEditNewsPopup = true;
    this.news_edit = blog;
  }

  navigateEditNewsBlog() {
    this.closePopup();
    this.route.navigateByUrl(`dashboard/edit-news/${this.news_edit.guid}`);
  }

  closePopup(): void {
    this.showDeletePopup = false;
    this.showEditPopup = false;
    this.showEditNewsPopup = false;
  }

  slugify(str: string) {
    return str
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/--+/g, '-'); // Collapse multiple dashes
  }
}
