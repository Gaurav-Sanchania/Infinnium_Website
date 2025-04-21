/* eslint-disable @typescript-eslint/no-explicit-any */
 import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { BlogsListComponent } from '../../blogs-list/blogs-list.component';
import { NewsService } from '../../../../services/newsService.service';

@Component({
  standalone: true,
  selector: 'app-news-list-layout',
  imports: [HeaderComponent, HeroSectionComponent, BlogsListComponent, FooterComponent],
  providers: [NewsService],
  templateUrl: './news-list-layout.component.html',
  styleUrl: './news-list-layout.component.css'
})
export class NewsListLayoutComponent implements OnInit {
  constructor(private newsService: NewsService) { }

  public news: any = [];
  public top3News: any = [];

  async ngOnInit() {
    this.news = await this.newsService.getAllNews();
    this.top3News = await this.newsService.getTop3News();
  }
}
