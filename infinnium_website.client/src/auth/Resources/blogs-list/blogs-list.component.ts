/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  ViewChild,
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
  @ViewChild('blogGrid', { static: false }) blogGridRef!: ElementRef;
  @ViewChild('loadMoreBtn', { static: false }) loadMoreBtnRef!: ElementRef;

clearBlogGrid(): void {
  if (this.blogGridRef?.nativeElement) {
    this.blogGridRef.nativeElement.innerHTML = '';
  }
}
  @Input() category: string = '';
  @Input() blogs: any = [];
  @Input() news: any = [];
  constructor(private el: ElementRef, private renderer: Renderer2, private cdRef: ChangeDetectorRef) {
    // console.log(this.blogs);
  }

  currentBlogIndex = 0;
  blogsPerPage = 6;
  loadMoreBtn!: HTMLElement | null;

  ngOnChanges() {
    this.currentBlogIndex = 0;
    this.clearBlogGrid();
    this.renderBlogListing();
    
    this.cdRef.detectChanges();
  }

  ngAfterViewInit() {
    this.renderBlogListing();

    this.loadMoreBtn = this.el.nativeElement.querySelector('#loadMoreBtn');
    this.setupLoadMoreButton();
  }

  appendBlogCards(startIndex: number, count: number): void {
    const blogGrid = this.blogGridRef?.nativeElement;
    if (!blogGrid) return;

    if (this.category == 'Blogs') {
      const blogGrid = document.getElementById(
        'blog-grid'
      ) as HTMLElement | null;
      if (!blogGrid) return;

      const endIndex = Math.min(startIndex + count, this.blogs.length);

      for (let i = startIndex; i < endIndex; i++) {
        const post = this.blogs[i];
        const cardLink = document.createElement('a');
        cardLink.classList.add('block');

        const maxLength = 60;
        let title = post.title;
        cardLink.href = `/resources/blogs/${slugify(title)}/${post.guid}`;

        if (title.length > maxLength) {
          title = title.slice(0, maxLength) + '...';
        }

        function slugify(str: string) {
          return str
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/--+/g, '-'); // Collapse multiple dashes
        }

        // console.log(encodeURIComponent(title));
        //console.log(cardLink.href);

        //console.log(post.image);
        cardLink.innerHTML = `
        <div class="bg-white rounded-lg overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
  <div class="h-40 overflow-hidden">
    <img src="${
      post.image
    }" alt="Blog Post" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
  </div>
  <div class="p-4 flex flex-col flex-grow">
    <p class="text-sm font-medium text-[#E76F51] uppercase mb-2">BLOGS</p>
    <h3 class="text-lg font-semibold mb-2 hover:text-[#E76F51] transition-colors duration-300">${title}</h3>
    <p class="text-gray-600 text-sm mb-3 flex-grow">${post.brief}</p>
    <div class="flex items-center text-gray-400 text-sm">
      <i class="far fa-calendar-alt mr-2"></i>${new Date(
        post.publishedDate
      ).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </div>
  </div>
</div>
      `;

        blogGrid.appendChild(cardLink);

        this.currentBlogIndex = endIndex;

        if (this.currentBlogIndex >= this.blogs.length) {
          this.renderer.addClass(this.loadMoreBtn, 'hidden');
        }
      }
    } else {
      const blogGrid = document.getElementById(
        'blog-grid'
      ) as HTMLElement | null;
      if (!blogGrid) return;

      const endIndex = Math.min(startIndex + count, this.news.length);

      for (let i = startIndex; i < endIndex; i++) {
        const post = this.news[i];
        const cardLink = document.createElement('a');
        cardLink.classList.add('block');

        const maxLength = 60;
        let title = post.title;
        cardLink.href = `/resources/news-and-events/${slugify(title)}/${
          post.guid
        }`;

        if (title.length > maxLength) {
          title = title.slice(0, maxLength) + '...';
        }

        function slugify(str: string) {
          return str
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/--+/g, '-'); // Collapse multiple dashes
        }

        // cardLink.href = `/Resources/News-and-Events/${encodeURIComponent(title)}/${post.guid}`;
        //console.log(cardLink.href);

        cardLink.innerHTML = `
        <div class="bg-white rounded-lg overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
  <div class="h-40 overflow-hidden">
    <img src="${
      post.image
    }" alt="Blog Post" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
  </div>
  <div class="p-4 flex flex-col flex-grow">
    <p class="text-sm font-medium text-[#E76F51] uppercase mb-2">NEWS / EVENTS</p>
    <h3 class="text-lg font-semibold mb-2 hover:text-[#E76F51] transition-colors duration-300">${title}</h3>
    <p class="text-gray-600 text-sm mb-3 flex-grow">${post.brief}</p>
    <div class="flex items-center text-gray-400 text-sm">
      <i class="far fa-calendar-alt mr-2"></i>${new Date(
        post.publishedDate
      ).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </div>
  </div>
</div>
      `;

        blogGrid.appendChild(cardLink);

        this.currentBlogIndex = endIndex;

        if (this.currentBlogIndex >= this.news.length) {
          this.renderer.addClass(this.loadMoreBtn, 'hidden');
        }
      }
    }
  }

  renderBlogListing(): void {
    this.appendBlogCards(0, this.blogsPerPage);
  }

  setupLoadMoreButton(): void {
    if (this.loadMoreBtnRef) {
      this.renderer.listen(this.loadMoreBtnRef.nativeElement, 'click', () => {
        this.appendBlogCards(this.currentBlogIndex, this.blogsPerPage);
      });
    }
  }
}

