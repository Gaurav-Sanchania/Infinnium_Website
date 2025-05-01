/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthorService } from '../../../services/authorService.service';

@Component({
  standalone: true,
  selector: 'app-team',
  imports: [RouterLink, CommonModule],
  providers: [AuthorService],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent implements OnInit, AfterViewInit, AfterViewChecked {
  constructor(private authorService: AuthorService, private router: Router) {}

  public authors: any = [];

  async ngOnInit() {
    this.authors = await this.authorService.getAllAuthors();
  }

  private hasInitializedAnimations = false;

  ngAfterViewChecked() {
    if (!this.hasInitializedAnimations && this.authors.length > 0) {
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

  goToMember(author: any) {
    this.router.navigate(['Member', author.name, author.guid]);
  }
}
