import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { CookieComponent } from '../auth/Cookies/cookie/cookie.component';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../services/configService.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, CookieComponent, CommonModule],
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'infinnium_website.client';
  configLoaded = false;
  apiBaseUrl = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private configService: ConfigService
  ) {
    this.setBrowserTitle();
  }

  ngOnInit() {
    this.loadConfig();
    this.initGlobalScrollBgTransitions();

    // Re-initialize scroll effect on every route change
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          this.initGlobalScrollBgTransitions();
        }, 100); // Delay ensures DOM is ready
      });
  }

  loadConfig() {
    this.configService.loadConfig().subscribe({
      next: (config) => {
        this.configLoaded = true;
        this.apiBaseUrl = config.apiBaseUrl;
      },
      error: (err) => {
        throw err;
      },
    });
  }

  refreshConfig() {
    this.configService.refreshConfig().subscribe({
      next: (config) => {
        this.apiBaseUrl = config.apiBaseUrl;
      },
      error: (err) => {
        throw err;
      },
    });
  }

  setBrowserTitle() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        if (data['title']) {
          this.titleService.setTitle(data['title']);
        }
      });
  }

  initGlobalScrollBgTransitions() {
    const elements = document.querySelectorAll('.scroll-bg-transition');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-bg-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));
  }
}
