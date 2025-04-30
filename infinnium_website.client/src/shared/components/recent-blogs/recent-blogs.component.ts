/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
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
export class RecentBlogsComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
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

  private hasInitializedAnimations = false;

  ngAfterViewChecked() {
    if (!this.hasInitializedAnimations && this.recentBlogs.length > 0) {
      this.hasInitializedAnimations = true;
      this.initScrollAnimations();
    }
  }

  // Lifecycle hook for initializing the animations after the view is initialized
  ngAfterViewInit() {
    // console.log('Component Initialized');
    this.initScrollAnimations();
  }

  // Initialize scroll-triggered animations using IntersectionObserver
  initScrollAnimations() {
    const elementsToAnimate = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Trigger animation when the element comes into view
            observer.unobserve(entry.target); // Stop observing the element once it has been animated
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    elementsToAnimate.forEach((element) => {
      observer.observe(element); // Observe each element with the 'data-animate' attribute
    });
  }

  slugify(str: string) {
    return str
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/--+/g, '-'); // Collapse multiple dashes
  }
}
