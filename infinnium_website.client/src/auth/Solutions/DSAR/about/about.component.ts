/* eslint-disable @typescript-eslint/no-empty-function */
import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-dsar-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  items = [
    {
      id: 1,
      heading: 'Smart, Secure & Seamless Data Access Management',
      description: `4iG® DSAR allows you to securely retrieve, verify, and respond to dSARs. It centralizes data management by natively connecting to various disparate systems of your digital landscape, facilitating efficient search and retrieval across various data sources within the organization. By centralizing and streamlining these procedures, it minimizes the time and resources required to fulfill requests, thereby improving operational efficiency with higher confidence levels.`
    },
    {
      id: 2,
      heading: 'Automate & Simplify Compliance with Global Privacy Laws',
      description: `4iG® DSAR (Data Subject Access Request) module is a vital tool for organizations handling requests from your organization’s DSAR ticketing system and help individuals to access their personal data. It simplifies and automates the entire process, ensuring compliance with stringent privacy regulations such as GDPR, HIPAA, CCPA, Gramm-Leach-Bliley Act, CPRA, COPPA, VCDPA, CDPA, Nevada SB220, PDPA, NY S5642, NH HB 1680-FN, DPDP Act of India, LGPD Brazil, PIPEDA Canada, POPIA South Africa, etc.`
    },
    {
      id: 3,
      heading: 'AI-Powered Data Access & Redaction Compliance',
      description: `4iG® DSAR addresses “Right to be forgotten and Right To data Access” needs using AI Based PXI identification and redaction. 4iG® DSAR enhances transparency and accountability by maintaining detailed audit trails of request processing. It enables organizations to demonstrate compliance with regulatory requirements and uphold individuals’ rights to access and control their personal information.`
    }
  ];

   currentIndex = 0;
  private autoScrollInterval: ReturnType<typeof setInterval> | null = null;

  constructor(private el: ElementRef, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const descriptionContainer = this.el.nativeElement.querySelector('#description-container');
    const headingContainer = this.el.nativeElement.querySelector('#heading-container');
    const mobileDescription = this.el.nativeElement.querySelector('#mobile-description');
    const scrollItems = this.el.nativeElement.querySelectorAll('.scroll-item');
    const headingItems = this.el.nativeElement.querySelectorAll('.heading-item');
    const header = this.el.nativeElement.querySelector('#section-header');

    // Fade-in animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (header) observer.observe(header);
    scrollItems.forEach((el: Element) => observer.observe(el));
    if (mobileDescription) observer.observe(mobileDescription);
    if (headingContainer) observer.observe(headingContainer);

    const updateActiveStates = () => {
      headingItems.forEach((h: HTMLElement, i: number) => {
        h.classList.toggle('active', i === this.currentIndex);
      });
      scrollItems.forEach((s: HTMLElement, i: number) => {
        s.classList.toggle('active', i === this.currentIndex);
      });

      if (headingContainer && mobileDescription) {
        const headingFlex = headingContainer.querySelector('.flex');
        const descriptionFlex = mobileDescription.querySelector('.flex');
        if (headingFlex && descriptionFlex) {
          headingFlex.style.transform = `translateX(-${this.currentIndex * 100}%)`;
          descriptionFlex.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        }
      }
    };

    this.updateActiveStatesWithAnimation = () => {
      updateActiveStates();
      if (headingContainer && mobileDescription) {
        headingContainer.classList.remove('animate-fade-in-up');
        mobileDescription.classList.remove('animate-fade-in-up');
        void headingContainer.offsetWidth;
        void mobileDescription.offsetWidth;
        headingContainer.classList.add('animate-fade-in-up');
        mobileDescription.classList.add('animate-fade-in-up');
      }
    };

    if (descriptionContainer) {
      let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
      const debounceScroll = () => {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          let closestIndex = this.currentIndex;
          let smallestDistance = Infinity;
          const containerRect = descriptionContainer.getBoundingClientRect();
          const center = containerRect.top + containerRect.height / 2;

          scrollItems.forEach((item: HTMLElement, index: number) => {
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.top + rect.height / 2;
            const distance = Math.abs(itemCenter - center);

            if (distance < smallestDistance) {
              smallestDistance = distance;
              closestIndex = index;
            }
          });

          if (this.currentIndex !== closestIndex) {
            this.currentIndex = closestIndex;
            updateActiveStates();
            this.cdr.detectChanges();
          }

        }, 100);
      };

      descriptionContainer.addEventListener('scroll', debounceScroll);
    }

    // Heading click (for both layouts)
    headingItems.forEach((item: HTMLElement, index: number) => {
      item.addEventListener('click', () => {
        if (this.autoScrollInterval) {
          clearInterval(this.autoScrollInterval);
          this.autoScrollInterval = null;
        }

        this.currentIndex = index;
        this.updateActiveStatesWithAnimation();

        if (descriptionContainer && scrollItems[index]) {
          const containerRect = descriptionContainer.getBoundingClientRect();
          const targetRect = scrollItems[index].getBoundingClientRect();
          const scrollTop = targetRect.top - containerRect.top + descriptionContainer.scrollTop - (containerRect.height - targetRect.height) / 2;

          descriptionContainer.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
          });
        }

        this.cdr.detectChanges();
      });
    });

    // Touch Swipe for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    if (mobileDescription) {
      mobileDescription.addEventListener('touchstart', (e: TouchEvent) => {
        touchStartX = e.changedTouches[0].screenX;
      });

      mobileDescription.addEventListener('touchend', (e: TouchEvent) => {
        touchEndX = e.changedTouches[0].screenX;
        const deltaX = touchEndX - touchStartX;

        if (Math.abs(deltaX) > 50) {
          if (deltaX > 0 && this.currentIndex > 0) {
            this.currentIndex--;
          } else if (deltaX < 0 && this.currentIndex < this.items.length - 1) {
            this.currentIndex++;
          }
          this.updateActiveStatesWithAnimation();
          this.cdr.detectChanges();
        }
      });
    }

    // Auto-scroll for mobile
    const startAutoScroll = () => {
      if (!this.autoScrollInterval) {
        this.autoScrollInterval = setInterval(() => {
          this.currentIndex = (this.currentIndex + 1) % this.items.length;
          this.updateActiveStatesWithAnimation();
          this.cdr.detectChanges();
        }, 5000);
      }
    };

    if (window.innerWidth < 768) {
      startAutoScroll();
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth < 768 && !this.autoScrollInterval) {
        startAutoScroll();
      } else if (window.innerWidth >= 768 && this.autoScrollInterval) {
        clearInterval(this.autoScrollInterval);
        this.autoScrollInterval = null;
      }
      updateActiveStates();
      this.cdr.detectChanges();
    });

    updateActiveStates();

    // Scroll to first item (desktop)
    if (descriptionContainer && scrollItems.length > 0) {
      const firstDescription = scrollItems[0];
      const containerRect = descriptionContainer.getBoundingClientRect();
      const targetRect = firstDescription.getBoundingClientRect();
      descriptionContainer.scrollTop = targetRect.top - containerRect.top + descriptionContainer.scrollTop - (containerRect.height - targetRect.height) / 2;
    }

    this.cdr.detectChanges();
  }

  onDotClick(index: number) {
    this.currentIndex = index;
    this.updateActiveStatesWithAnimation();
    this.cdr.detectChanges();
  }

  private updateActiveStatesWithAnimation(): void {}

  ngOnDestroy(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
      this.autoScrollInterval = null;
    }
  }
}
