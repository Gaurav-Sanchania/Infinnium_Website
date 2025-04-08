/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { SingleBlogComponent } from "../../single-blog/single-blog.component";
import { RecentBlogsComponent } from "../../../../shared/components/recent-blogs/recent-blogs.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { NewsService } from '../../../../services/newsService.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-news-layout',
  imports: [HeaderComponent, HeroSectionComponent, SingleBlogComponent, RecentBlogsComponent, FooterComponent],
  templateUrl: './single-news-layout.component.html',
  styleUrl: './single-news-layout.component.css'
})
export class SingleNewsLayoutComponent implements OnInit {
  @Input() newsId!: string;
  public guid: string = "";
  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  public top3News: any = [];
  public news: any = [];

  async ngOnInit() {
    this.top3News = await this.newsService.getTop3News();

    const guidFromRoute = this.route.snapshot.paramMap.get('guid');

    if (guidFromRoute) {
      this.guid = guidFromRoute;
      this.news = await this.newsService.getNewsDetails(this.guid);
      if (this.news?.publishedDate && typeof this.news.publishedDate === 'string') {
        this.news.publishedDate = new Date(this.news.publishedDate);
      }
    } else {
      console.error('GUID not found in route!');
    }
  }
}
