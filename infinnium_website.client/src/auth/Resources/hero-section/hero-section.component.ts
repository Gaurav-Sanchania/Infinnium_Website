/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  Component,
  ElementRef,
  Renderer2,
  Input,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-resources-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent implements AfterViewInit, OnChanges {
  @Input() category: string = '';
  @Input() top3Blogs: any = [];
  @Input() top3News: any = [];

  routePart = '';
  currentBlogIndex: number = 0;
  blogsPerPage: number = 6;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    //console.log(this.category);
    //console.log(this.top3Blogs);
    this.renderHeroSlides();
    this.startSlideshow();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['top3Blogs'] || changes['top3News'] || changes['category']) {
      this.renderHeroSlides(); // Clear old ones first maybe
      this.startSlideshow();
    }
  }

  renderHeroSlides(): void {
    const heroSlideshow = this.el.nativeElement.querySelector('#heroslideshow');
    if (!heroSlideshow) return;

    function slugify(str: string) {
      return str
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/--+/g, '-'); // Collapse multiple dashes
    }

    const top3 =
      this.category == 'Blogs'
        ? this.top3Blogs.slice(0, 3)
        : this.top3News.slice(0, 3);
    //console.log(top3);

    this.routePart = this.category == 'Blogs' ? 'blogs' : 'news-and-events';

    top3.forEach((post: any, index: number) => {
      const slideLink = this.renderer.createElement('a');

      const slideClasses = [
        'slide',
        'absolute',
        'inset-0',
        'transition-opacity',
        'duration-1000',
        'flex',
        'flex-col',
        'md:flex-row',
        'items-center',
        'space-x-0',
        'md:space-x-8',
        'no-underline',
        'text-inherit',
      ];
      slideClasses.forEach((cls) => this.renderer.addClass(slideLink, cls));

      if (index === 0) {
        this.renderer.addClass(slideLink, 'opacity-100');
        this.renderer.removeClass(slideLink, 'pointer-events-none');
      } else {
        this.renderer.addClass(slideLink, 'opacity-0');
        this.renderer.addClass(slideLink, 'pointer-events-none');
      }

      const maxLength = 90;
      let title = post.title;
      const link = `/resources/${this.routePart}/${slugify(title)}/${
        post.guid
      }`;
      this.renderer.setAttribute(slideLink, 'href', link);

      if (title.length > maxLength) {
        title = title.slice(0, maxLength) + '...';
      }

      slideLink.innerHTML = `
        <div class="w-full md:w-1/3 h-60 overflow-hidden">
          <img src="${
            post.image
          }" alt="Blog Image" class="w-full h-full object-cover rounded-lg" />
        </div>
        <div class="w-full md:w-2/3 mt-4 md:mt-0 flex flex-col justify-between min-h-[234px]">
          <div>
            <p class="text-sm font-medium uppercase text-[#E76F51] mb-2">${
              this.category
            }</p>
            <div class="flex items-center text-gray-400 text-sm mb-2">
              <i class="far fa-calendar-alt mr-2"></i>${new Date(
                post.publishedDate
              ).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <h2 class="text-xl md:text-2xl font-semibold mb-3">${title}</h2>
            <p class="text-gray-200 text-sm mb-4 line-clamp-2">${post.brief}</p>
          </div>
        </div>`;

      this.renderer.appendChild(heroSlideshow, slideLink);
    });
  }

  startSlideshow(): void {
    const slides: NodeListOf<Element> = this.el.nativeElement.querySelectorAll(
      '#heroslideshow .slide'
    );
    let currentIndex = 0;
  
    if (slides.length > 0) {
      setInterval(() => {
        const prevSlide = slides[currentIndex];
        this.renderer.removeClass(prevSlide, 'opacity-100');
        this.renderer.addClass(prevSlide, 'opacity-0');
        this.renderer.addClass(prevSlide, 'pointer-events-none');
  
        currentIndex = (currentIndex + 1) % slides.length;
  
        const nextSlide = slides[currentIndex];
        this.renderer.removeClass(nextSlide, 'opacity-0');
        this.renderer.removeClass(nextSlide, 'pointer-events-none');
        this.renderer.addClass(nextSlide, 'opacity-100');
      }, 4000);
    }
  }
}
