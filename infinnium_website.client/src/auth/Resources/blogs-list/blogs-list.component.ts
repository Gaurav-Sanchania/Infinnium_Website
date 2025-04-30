/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-resources-blogs-list',
  imports: [CommonModule],
  templateUrl: './blogs-list.component.html',
  styleUrl: './blogs-list.component.css',
})
export class BlogsListComponent implements AfterViewInit, OnChanges {
  @Input() category: string = '';
  @Input() blogs: any = [];
  @Input() news: any = [];
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // console.log(this.blogs);
  }

  currentBlogIndex = 0;
  blogsPerPage = 6;
  loadMoreBtn!: HTMLElement | null;

  ngOnChanges() {
    this.renderBlogListing();

    // Only if re-rendering all blogs
    const allAnimatables = this.el.nativeElement.querySelectorAll(
      '[data-animate]:not(.animate)'
    );
    this.initScrollAnimations(allAnimatables);
  }

  ngAfterViewInit() {
    this.renderBlogListing(); // Renders the first 6 blogs

    this.loadMoreBtn = this.el.nativeElement.querySelector('#loadMoreBtn');
    this.setupLoadMoreButton();

    // Animate only the initially rendered blog cards
    const elements = this.el.nativeElement.querySelectorAll(
      '[data-animate]:not(.animate)'
    );
    this.initScrollAnimations(elements);
  }

  private initScrollAnimations(
    elements: Element[] | NodeListOf<Element>
  ): void {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            entry.target.setAttribute('data-animated', 'true'); 
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach((element) => {
      if (!element.classList.contains('animate')) {
        observer.observe(element);
      }
    });
  }

  appendBlogCards(startIndex: number, count: number): void {
    const blogGrid = document.getElementById('blog-grid') as HTMLElement | null;
    if (!blogGrid) return;

    const isBlog = this.category === 'Blogs';
    const data = isBlog ? this.blogs : this.news;
    const endIndex = Math.min(startIndex + count, data.length);
    const newBlogElements: HTMLElement[] = [];

    for (let i = startIndex; i < endIndex; i++) {
      const post = data[i];
      const cardLink = document.createElement('a');
      cardLink.classList.add('block');
      cardLink.setAttribute('data-animate', ''); // Required for animation

      // Truncate title if too long
      const maxLength = 60;
      const title =
        post.title.length > maxLength
          ? post.title.slice(0, maxLength) + '...'
          : post.title;

      // Create slug for the URL
      function slugify(str: string) {
        return str
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/--+/g, '-');
      }

      const slug = slugify(title);
      const urlPath = isBlog
        ? `/resources/blogs/${slug}/${post.guid}`
        : `/resources/news-and-events/${slug}/${post.guid}`;
      cardLink.href = urlPath;

      const categoryLabel = isBlog ? 'BLOGS' : 'NEWS / EVENTS';

      cardLink.innerHTML = `
      <div class="bg-white rounded-lg overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
        <div class="h-40 overflow-hidden">
          <img src="${post.image}" alt="Blog Post"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
        </div>
        <div class="p-4 flex flex-col flex-grow">
          <p class="text-sm font-medium text-[#E76F51] uppercase mb-2">${categoryLabel}</p>
          <h3 class="text-lg font-semibold mb-2 hover:text-[#E76F51] transition-colors duration-300">${title}</h3>
          <p class="text-gray-600 text-sm mb-3 flex-grow">${post.brief}</p>
          <div class="flex items-center text-gray-400 text-sm">
            <i class="far fa-calendar-alt mr-2"></i>
            ${new Date(post.publishedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>
      </div>
    `;

      blogGrid.appendChild(cardLink);
      newBlogElements.push(cardLink);
    }

    // Update the current index
    this.currentBlogIndex = endIndex;

    // Hide the button if all items are shown
    if (this.currentBlogIndex >= data.length && this.loadMoreBtn) {
      this.renderer.addClass(this.loadMoreBtn, 'hidden');
    }

    // Trigger scroll animation for newly added cards
    // this.initScrollAnimations(newBlogElements);


    setTimeout(() => {
      this.initScrollAnimations(newBlogElements);
    }, 50);
  }

  renderBlogListing(): void {
    this.appendBlogCards(0, this.blogsPerPage);
  }

  setupLoadMoreButton(): void {
    if (this.loadMoreBtn) {
      this.renderer.listen(this.loadMoreBtn, 'click', () => {
        this.appendBlogCards(this.currentBlogIndex, this.blogsPerPage);
      });
    }
  }
}
