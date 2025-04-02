/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  link: string;
}

@Component({
  standalone: true,
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements AfterViewInit{
  blogPosts: BlogPost[] = [
    {
      category: "Blogs",
      title:
        "Legal Tech Veteran and Innovator Elle Francis Joins the Infinium Leadership Team",
      excerpt:
        "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
      date: "October 24, 2023",
      image: "ediscovery-1288x724-1.webp",
      link: "blog_inside.html",
    },
    {
      category: "Blogs",
      title:
        "Utilizing Information Governance Software For Discovery Workflows",
      excerpt:
        "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
      date: "December 3, 2025",
      image: "blog-image.png",
      link: "blog_inside.html",
    },
    {
      category: "Blogs",
      title:
        "What Role Does Culture And Collaboration Play In Tech Success?",
      excerpt:
        "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
      date: "December 3, 2025",
      image: "blog-image2.png",
      link: "blog_inside.html",
    },
    {
      category: "Blogs",
      title:
        "How Role Does Culture And Collaboration Impact Team Productivity?",
      excerpt:
        "Explore how synergy between culture and collaboration drives success.",
      date: "January 10, 2025",
      image: "ediscovery-1288x724-1.webp",
      link: "blog_inside.html",
    },
    {
      category: "News and Events",
      title: "Our Latest Webinar on Legal Tech Innovations",
      excerpt:
        "A quick recap of our well-received webinar on new trends in legal tech.",
      date: "February 1, 2025",
      image: "ediscovery-1288x724-1.webp",
      link: "blog_inside.html",
    },
    {
      category: "Blogs",
      title: "A Comprehensive Guide to E-Discovery",
      excerpt:
        "Breaking down the basics and advanced techniques in e-discovery for legal firms.",
      date: "March 15, 2025",
      image: "ediscovery-1288x724-1.webp",
      link: "blog_inside.html",
    },
    {
      category: "Blogs",
      title: "Transforming Data Management with AI",
      excerpt:
        "How AI is revolutionizing the way organizations handle big data.",
      date: "April 22, 2025",
      image: "ediscovery-1288x724-1.webp",
      link: "blog_inside.html",
    },
    {
      category: "News and Events",
      title: "Infinium Leadership Summit 2025",
      excerpt:
        "A highlight reel from our recent leadership summit focusing on technology and collaboration.",
      date: "May 3, 2025",
      image: "ediscovery-1288x724-1.webp",
      link: "blog_inside.html",
    },
    {
      category: "Blogs",
      title: "5 Steps to Boost Cybersecurity in Your Organization",
      excerpt:
        "Essential strategies to protect your data from cyber threats.",
      date: "June 10, 2025",
      image: "ediscovery-1288x724-1.webp",
      link: "blog_inside.html",
    },
    {
      category: "Blogs",
      title:
        "Legal Tech Veteran and Innovator Elle Francis Joins the Infinium Leadership Team",
      excerpt:
        "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
      date: "October 24, 2023",
      image: "ediscovery-1288x724-1.webp",
      link: "blog_inside.html",
    },
    {
      category: "Blogs",
      title:
        "Utilizing Information Governance Software For Discovery Workflows",
      excerpt:
        "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
      date: "December 3, 2025",
      image: "blog-image.png",
      link: "blog_inside.html",
    },
    {
      category: "Blogs",
      title:
        "What Role Does Culture And Collaboration Play In Tech Success?",
      excerpt:
        "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
      date: "December 3, 2025",
      image: "blog-image2.png",
      link: "blog_inside.html",
    },
    {
      category: "Blogs",
      title:
        "How Role Does Culture And Collaboration Impact Team Productivity?",
      excerpt:
        "Explore how synergy between culture and collaboration drives success.",
      date: "January 10, 2025",
      image: "ediscovery-1288x724-1.webp",
      link: "blog_inside.html",
    },
    {
      category: "News and Events",
      title: "Our Latest Webinar on Legal Tech Innovations",
      excerpt:
        "A quick recap of our well-received webinar on new trends in legal tech.",
      date: "February 1, 2025",
      image: "ediscovery-1288x724-1.webp",
      link: "blog_inside.html",
    },
    {
      category: "Blogs",
      title: "A Comprehensive Guide to E-Discovery",
      excerpt:
        "Breaking down the basics and advanced techniques in e-discovery for legal firms.",
      date: "March 15, 2025",
      image: "ediscovery-1288x724-1.webp",
      link: "blog_inside.html",
    },
    {
      category: "Blogs",
      title: "Transforming Data Management with AI",
      excerpt:
        "How AI is revolutionizing the way organizations handle big data.",
      date: "April 22, 2025",
      image: "ediscovery-1288x724-1.webp",
      link: "blog_inside.html",
    },
    {
      category: "News and Events",
      title: "Infinium Leadership Summit 2025",
      excerpt:
        "A highlight reel from our recent leadership summit focusing on technology and collaboration.",
      date: "May 3, 2025",
      image: "ediscovery-1288x724-1.webp",
      link: "blog_inside.html",
    },
    {
      category: "Blogs",
      title: "5 Steps to Boost Cybersecurity in Your Organization",
      excerpt:
        "Essential strategies to protect your data from cyber threats.",
      date: "June 10, 2025",
      image: "ediscovery-1288x724-1.webp",
      link: "blog_inside.html",
    },
  ];

  currentBlogIndex: number = 0;
  blogsPerPage: number = 6;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderHeroSlides();
    this.startSlideshow();
  }

  renderHeroSlides(): void {
    const heroSlideshow = this.el.nativeElement.querySelector("#heroslideshow");
    if (!heroSlideshow) return;

    const top3 = this.blogPosts.slice(0, 3);

    top3.forEach((post, index) => {
      const slideLink = this.renderer.createElement('a');
      this.renderer.setAttribute(slideLink, 'href', post.link);
      this.renderer.addClass(slideLink, 'block');

      const slide = this.renderer.createElement('div');
      const slideClasses = ["slide", "absolute", "inset-0", "transition-opacity", "duration-1000", "flex", "flex-col", "md:flex-row", "items-center", "space-x-0", "md:space-x-8"];
      slideClasses.forEach(cls => this.renderer.addClass(slide, cls));
      this.renderer.addClass(slide, index === 0 ? "opacity-100" : "opacity-0");

      slide.innerHTML = `
        <div class="w-full md:w-1/3">
          <img src="${post.image}" alt="Blog Image ${index + 1}" class="w-full h-auto object-cover" />
        </div>
        <div class="w-full md:w-2/3 mt-4 md:mt-0 flex flex-col justify-between min-h-[234px]">
          <div>
            <p class="text-sm font-medium uppercase text-[#E76F51] mb-2">${post.category}</p>
            <div class="flex items-center text-gray-400 text-sm mb-2">
            <i class="far fa-calendar-alt mr-2"></i>${post.date}
          </div>
            <h2 class="text-xl md:text-2xl font-semibold mb-3">${post.title}</h2>
            <p class="text-gray-200 text-sm mb-4 line-clamp-2">${post.excerpt}</p>
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
