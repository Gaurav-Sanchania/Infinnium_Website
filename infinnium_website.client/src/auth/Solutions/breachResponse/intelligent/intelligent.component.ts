/* eslint-disable @typescript-eslint/no-empty-function */
import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-intelligent',
  imports: [CommonModule],
  templateUrl: './intelligent.component.html',
  styleUrl: './intelligent.component.css',
})
export class IntelligentComponent implements AfterViewInit, OnDestroy {
  items = [
    {
      id: 1,
      heading: 'Complete Control Over Breach Data with 4iG®',
      description: `In the ever-evolving landscape of incident response, the need for swift and accurate post-cyber-breach document review has never been more critical. Infinnium’s 4iG® BreachProfiler™ stands out by providing the fastest and most comprehensive way to identify entities requiring notification, tailored to your and counsel’s specifications. Powered by machine learning and generative AI models, it ensures a quick, seamless, and compliant response to potential breaches as just one part of the complete 4iG® Information Governance platform.`
    },
    {
      id: 2,
      heading: 'Your Data…..Under Your Control',
      description: `Infinnium BreachProfiler™ has capabilities in the breach review domain that are unparalleled and distinctly unique. The solution offers the flexibility of on-site deployment, ensuring data remains within the client’s premises, or securely captured by incident response teams for ingestion into the platform. Unlike SaaS-based competitors, BreachProfiler™ is not a hosted service—so data never leaves your environment. Whether deployed on-site or securely captured by incident response teams, 4iG® ensures that your breached data remains securely within your control. This eliminates the need to send sensitive information to third parties, reducing the risk of exposure and providing peace of mind that your data is safe throughout the review process. If you prefer to use it via a service provider, we have a network of trusted partners that host BreachProfiler™ and can provide our technology to suit your needs.`
    },
    {
      id: 3,
      heading: 'Flexible, Scalable, and Quick',
      description: `The solution’s ingestion speed is highly scalable, adjusting vertically and horizontally to meet even the most stringent timelines. Through advanced indexing, BreachProfiler™ applies OCR to ensure comprehensive data capture, supporting 100+ OCR languages. It automatically identifies sensitive data like PII/PHI/PCI/PXI using 600+ accuracy-tunable definitions, with provisions for additional unlimited custom definitions as well.`
    },
    {
      id: 4,
      heading: 'Advanced Review and Redaction',
      description: `BreachProfiler™ offers a comprehensive review component supporting numerous reviewers with enhanced security measures such as granular account security, batching, tagging palettes, tagging logic, and detailed reviewer metrics. Our proprietary native redaction engine, ObscurePI®, automates rules-based redaction based on specified terms or PII definitions. BreachProfiler™ also processes hundreds of files in their native format, producing fully redacted native files without converting to PDF or other formats. It seamlessly integrates with Relativity, enabling direct export/import, creation of load files, images, PDFs, and much more.`
    },
    {
      id: 5,
      heading: 'Efficient Entity Management Powered by AI',
      description: `The solution’s entity identification and automated entity-to-file association functionalities significantly reduce review time and ensure a robust audit trail. Identified entities and PII are instantly accessible in customizable reports, including pre-built reports tailored for common requirements. Users can search by PII type, entity, or PII volume, export data for jurisdictional review, generate third-party notification lists for legal counsel, and compile lists of unmatched PII values for further investigation. In addition to our proven machine learning algorithms, you can also choose to employ GenAI to enhance insights and accuracy via a private Large Language Model we’ve developed or plug in your own.`
    },
    {
      id: 6,
      heading: 'Proven and Reliable with No Surprises',
      description: `Most importantly, BreachProfiler™ is battle tested and trusted by some of the largest providers of data breach reviews in the world. We have clients processing terabytes of source data every day with ease, and others managing more than 750 million records within a single data “space” inside the platform. While other platforms often charge extra when large volumes of structured PII are detected within a single file as well as high monthly hosting costs, 4iG® treats all data equally. There are no hidden upcharges based on the complexity of your data, ensuring predictable costs regardless of the breach’s size or structure.`
    }
  ];

  currentIndex = 0;
  private autoScrollInterval: ReturnType<typeof setInterval> | null = null;

  constructor(private el: ElementRef, private cdr: ChangeDetectorRef) { }

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

  private updateActiveStatesWithAnimation(): void { }

  ngOnDestroy(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
      this.autoScrollInterval = null;
    }
  }
}
