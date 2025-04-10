/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, ElementRef, Renderer2, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BlogsService } from '../../../services/blogsService.service';

@Component({
  standalone: true,
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements OnChanges{
  @Input() category: string = "";
  @Input() top3Blogs: any = [];
  @Input() top3News: any = [];

  currentBlogIndex: number = 0;
  blogsPerPage: number = 6;

  constructor(private el: ElementRef, private renderer: Renderer2, private blogService: BlogsService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.renderHeroSlides();
    this.startSlideshow();
  }

  renderHeroSlides(): void {
    const heroSlideshow = this.el.nativeElement.querySelector("#heroslideshow");
    if (!heroSlideshow) return;

    const top3 = (this.category == 'Blogs') ? this.top3Blogs.slice(0, 3) : this.top3News.slice(0, 3);

    top3.forEach((post: any, index: number) => {
      const slideLink = this.renderer.createElement('a');
      this.renderer.setAttribute(slideLink, 'href', post.link);
      this.renderer.addClass(slideLink, 'block');

      const slide = this.renderer.createElement('div');
      const slideClasses = ["slide", "absolute", "inset-0", "transition-opacity", "duration-1000", "flex", "flex-col", "md:flex-row", "items-center", "space-x-0", "md:space-x-8"];
      slideClasses.forEach(cls => this.renderer.addClass(slide, cls));
      this.renderer.addClass(slide, index === 0 ? "opacity-100" : "opacity-0");

      slide.innerHTML = `
        <div class="w-full md:w-1/3">
          <img src="blog-image.png" alt="Blog Image" class="w-full h-auto object-cover" />
        </div>
        <div class="w-full md:w-2/3 mt-4 md:mt-0 flex flex-col justify-between min-h-[234px]">
          <div>
            <p class="text-sm font-medium uppercase text-[#E76F51] mb-2">${this.category}</p>
            <div class="flex items-center text-gray-400 text-sm mb-2">
            <i class="far fa-calendar-alt mr-2"></i>${new Date(post.publishedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
            <h2 class="text-xl md:text-2xl font-semibold mb-3">${post.title}</h2>
            <p class="text-gray-200 text-sm mb-4 line-clamp-2">${post.brief}</p>
          </div>
          
        </div>`;

      this.renderer.appendChild(slideLink, slide);
      this.renderer.appendChild(heroSlideshow, slideLink);
    });
  }

  startSlideshow(): void {
    const slides: NodeListOf<Element> = this.el.nativeElement.querySelectorAll("#heroslideshow .slide");
    let currentIndex = 0;

    if (slides.length > 0) {
      setInterval(() => {
        this.renderer.removeClass(slides[currentIndex], "opacity-100");
        this.renderer.addClass(slides[currentIndex], "opacity-0");
        currentIndex = (currentIndex + 1) % slides.length;
        this.renderer.removeClass(slides[currentIndex], "opacity-0");
        this.renderer.addClass(slides[currentIndex], "opacity-100");
      }, 4000);
    }
  }
}
