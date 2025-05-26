/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { BlogsListComponent } from '../../blogs-list/blogs-list.component';
import { NewsService } from '../../../../services/newsService.service';
import { ScrollIndicatorComponent } from "../../../../shared/components/scroll-indicator/scroll-indicator.component";
import { ScrollToTopComponent } from "../../../../shared/components/scroll-top/scroll-to-top.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-news-list-layout',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    BlogsListComponent,
    FooterComponent,
    ScrollIndicatorComponent,
    ScrollToTopComponent,
    NgIf, NgFor
],
  providers: [NewsService],
  templateUrl: './news-list-layout.component.html',
  styleUrl: './news-list-layout.component.css',
})
export class NewsListLayoutComponent implements OnInit {
  constructor(private newsService: NewsService, private cdr: ChangeDetectorRef) {}

  public news: any = [];
  public top3News: any = [];
  public loading = true;

  async ngOnInit() {
    this.loading = true;
    this.cdr.detectChanges();
    this.top3News = await this.newsService.getTop3News();
    this.news = await this.newsService.getAllNews();
    this.loading = false;
    this.cdr.detectChanges();
  }
}
