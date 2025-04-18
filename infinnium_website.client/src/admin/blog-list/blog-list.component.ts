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
  showEditNewsPopup = false;

  public blog_edit: any = [];
  public blog_delete!: number;

  public news_edit: any = [];
  public news_delete!: number;
  
  constructor(private blogService: BlogsService, private newsService: NewsService, private route: Router) { }

  async ngOnInit() {
    this.blogs = await this.blogService.getAllBlogsAdmin();
    // console.log(this.blogs);
    this.news = await this.newsService.getAllNewsAdmin();
  }

  editBlog(blog: any) {
    this.showEditPopup = true;
    this.blog_edit = blog;
    //console.log(this.blog_edit);
  }
  navigateEditBlog() {
    this.closePopup();
    this.route.navigateByUrl(`/edit-blog/${this.blog_edit.guid}`);
  }

  editNews(blog: any){
    this.showEditNewsPopup = true;
    this.news_edit = blog;
  }
  navigateEditNewsBlog() {
    this.closePopup();
    this.route.navigateByUrl(`/edit-news/${this.news_edit.guid}`);
  }

  //deleteBlog(id: number) {
  //  this.showDeletePopup = true;
  //  this.blog_delete = id;
  //  console.log(this.blog_delete);
  //}

  closePopup(): void {
    this.showDeletePopup = false;
    this.showEditPopup = false;
    this.showEditNewsPopup = false;
  }
}
