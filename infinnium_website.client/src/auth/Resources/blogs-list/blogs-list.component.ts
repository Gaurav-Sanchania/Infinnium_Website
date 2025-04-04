
import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';


interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

@Component({
  standalone: true,
  selector: 'app-blogs-list',
  imports: [],
  templateUrl: './blogs-list.component.html',
  styleUrl: './blogs-list.component.css'
})
export class BlogsListComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  blogPosts: BlogPost[] = [
    {
      category: "Blogs",
      title:
        "Legal Tech Veteran and Innovator Elle Francis Joins the Infinium Leadership Team",
      excerpt:
        "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
      date: "October 24, 2023",
      image: "ediscovery-1288x724-1.webp",
    },
    {
      category: "Blogs",
      title:
        "Utilizing Information Governance Software For Discovery Workflows",
      excerpt:
        "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
      date: "December 3, 2025",
      image: "blog-image.png",
    },
    {
      category: "Blogs",
      title:
        "What Role Does Culture And Collaboration Play In Tech Success?",
      excerpt:
        "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
      date: "December 3, 2025",
      image: "blog-image2.png",
    },
    {
      category: "Blogs",
      title:
        "How Role Does Culture And Collaboration Impact Team Productivity?",
      excerpt:
        "Explore how synergy between culture and collaboration drives success.",
      date: "January 10, 2025",
      image: "ediscovery-1288x724-1.webp",
    },
    {
      category: "News and Events",
      title: "Our Latest Webinar on Legal Tech Innovations",
      excerpt:
        "A quick recap of our well-received webinar on new trends in legal tech.",
      date: "February 1, 2025",
      image: "ediscovery-1288x724-1.webp",
    },
    {
      category: "Blogs",
      title: "A Comprehensive Guide to E-Discovery",
      excerpt:
        "Breaking down the basics and advanced techniques in e-discovery for legal firms.",
      date: "March 15, 2025",
      image: "ediscovery-1288x724-1.webp",
    },
    {
      category: "Blogs",
      title: "Transforming Data Management with AI",
      excerpt:
        "How AI is revolutionizing the way organizations handle big data.",
      date: "April 22, 2025",
      image: "ediscovery-1288x724-1.webp",
    },
    {
      category: "News and Events",
      title: "Infinium Leadership Summit 2025",
      excerpt:
        "A highlight reel from our recent leadership summit focusing on technology and collaboration.",
      date: "May 3, 2025",
      image: "ediscovery-1288x724-1.webp",
    },
    {
      category: "Blogs",
      title: "5 Steps to Boost Cybersecurity in Your Organization",
      excerpt:
        "Essential strategies to protect your data from cyber threats.",
      date: "June 10, 2025",
      image: "ediscovery-1288x724-1.webp",
    },
    {
      category: "Blogs",
      title:
        "Legal Tech Veteran and Innovator Elle Francis Joins the Infinium Leadership Team",
      excerpt:
        "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
      date: "October 24, 2023",
      image: "ediscovery-1288x724-1.webp",
    },
    {
      category: "Blogs",
      title:
        "Utilizing Information Governance Software For Discovery Workflows",
      excerpt:
        "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
      date: "December 3, 2025",
      image: "blog-image.png",
    },
    {
      category: "Blogs",
      title:
        "What Role Does Culture And Collaboration Play In Tech Success?",
      excerpt:
        "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
      date: "December 3, 2025",
      image: "blog-image2.png",
    },
    {
      category: "Blogs",
      title:
        "How Role Does Culture And Collaboration Impact Team Productivity?",
      excerpt:
        "Explore how synergy between culture and collaboration drives success.",
      date: "January 10, 2025",
      image: "ediscovery-1288x724-1.webp",
    },
    {
      category: "News and Events",
      title: "Our Latest Webinar on Legal Tech Innovations",
      excerpt:
        "A quick recap of our well-received webinar on new trends in legal tech.",
      date: "February 1, 2025",
      image: "ediscovery-1288x724-1.webp",
    },
    {
      category: "Blogs",
      title: "A Comprehensive Guide to E-Discovery",
      excerpt:
        "Breaking down the basics and advanced techniques in e-discovery for legal firms.",
      date: "March 15, 2025",
      image: "ediscovery-1288x724-1.webp",
    },
    {
      category: "Blogs",
      title: "Transforming Data Management with AI",
      excerpt:
        "How AI is revolutionizing the way organizations handle big data.",
      date: "April 22, 2025",
      image: "ediscovery-1288x724-1.webp",
    },
    {
      category: "News and Events",
      title: "Infinium Leadership Summit 2025",
      excerpt:
        "A highlight reel from our recent leadership summit focusing on technology and collaboration.",
      date: "May 3, 2025",
      image: "ediscovery-1288x724-1.webp",
    },
    {
      category: "Blogs",
      title: "5 Steps to Boost Cybersecurity in Your Organization",
      excerpt:
        "Essential strategies to protect your data from cyber threats.",
      date: "June 10, 2025",
      image: "ediscovery-1288x724-1.webp",
    },
  ];
  currentBlogIndex = 0;
  blogsPerPage = 6;
  loadMoreBtn!: HTMLElement | null;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadMoreBtn = this.el.nativeElement.querySelector("#loadMoreBtn");
      this.renderBlogListing();
      this.setupLoadMoreButton();
    });
  }

  appendBlogCards(startIndex: number, count: number): void {
    const blogGrid = document.getElementById("blog-grid") as HTMLElement | null;
    if (!blogGrid) return;

    const endIndex = Math.min(startIndex + count, this.blogPosts.length);

    for (let i = startIndex; i < endIndex; i++) {
      const post = this.blogPosts[i];
      const cardLink = document.createElement("a");
      cardLink.classList.add("block");
      cardLink.href = `/Resources/Blogs/blog1`;
      cardLink.innerHTML = `
        <div class="bg-white rounded-lg overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
  <div class="h-40 overflow-hidden">
    <img src="${post.image}" alt="Blog Post" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
  </div>
  <div class="p-4 flex flex-col flex-grow">
    <p class="text-sm font-medium text-[#E76F51] uppercase mb-2">${post.category}</p>
    <h3 class="text-lg font-semibold mb-2 hover:text-[#E76F51] transition-colors duration-300">${post.title}</h3>
    <p class="text-gray-600 text-sm mb-3 flex-grow">${post.excerpt}</p>
    <div class="flex items-center text-gray-400 text-sm">
      <i class="far fa-calendar-alt mr-2"></i>${post.date}
    </div>
  </div>
</div>
      `;

      blogGrid.appendChild(cardLink);
      
      this.currentBlogIndex = endIndex;
      
      if (this.currentBlogIndex >= this.blogPosts.length) {
        this.renderer.addClass(this.loadMoreBtn, "hidden");
      }
    }
  }

  renderBlogListing(): void {
    this.appendBlogCards(0, this.blogsPerPage);
  }

  setupLoadMoreButton(): void {
    if (this.loadMoreBtn) {
      this.renderer.listen(this.loadMoreBtn, "click", () => {
        this.appendBlogCards(this.currentBlogIndex, this.blogsPerPage);
      });
    }
  }
}
