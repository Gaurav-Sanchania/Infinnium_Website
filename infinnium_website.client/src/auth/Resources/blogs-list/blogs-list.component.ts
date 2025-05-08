/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-resources-blogs-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './blogs-list.component.html',
  styleUrl: './blogs-list.component.css',
})
export class BlogsListComponent implements OnInit, OnChanges {
  @Input() category: string = '';
  @Input() blogs: any[] = [];
  @Input() news: any[] = [];

  posts: any[] = [];
  displayedPosts: any[] = [];
  currentIndex: number = 0;
  postsPerPage: number = 6;
  hasMore: boolean = false;

  ngOnInit(): void {
    this.setupPosts();
  }

  ngOnChanges(): void {
    this.setupPosts();
  }

  private setupPosts(): void {
    this.posts = this.category === 'Blogs' ? this.blogs : this.news;
    this.currentIndex = 0;
    this.displayedPosts = [];
    this.loadMore();
  }

  loadMore(): void {
    const nextIndex = this.currentIndex + this.postsPerPage;
    const newPosts = this.posts.slice(this.currentIndex, nextIndex);
    this.displayedPosts = [...this.displayedPosts, ...newPosts];
    this.currentIndex = nextIndex;
    this.hasMore = this.currentIndex < this.posts.length;
  }

  slugify(str: string): string {
    return str
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-');
  }
}
