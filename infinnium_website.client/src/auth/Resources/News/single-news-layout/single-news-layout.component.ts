import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { SingleBlogComponent } from "../../single-blog/single-blog.component";
import { RecentBlogsComponent } from "../../../../shared/components/recent-blogs/recent-blogs.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { HeroSectionComponent } from '../../hero-section/hero-section.component';

@Component({
  selector: 'app-single-news-layout',
  imports: [HeaderComponent, HeroSectionComponent, SingleBlogComponent, RecentBlogsComponent, FooterComponent],
  templateUrl: './single-news-layout.component.html',
  styleUrl: './single-news-layout.component.css'
})
export class SingleNewsLayoutComponent {

}
