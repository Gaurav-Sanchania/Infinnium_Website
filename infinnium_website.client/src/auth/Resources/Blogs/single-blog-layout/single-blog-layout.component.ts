import { Component } from '@angular/core';
import { SingleBlogComponent } from "../../single-blog/single-blog.component";
import { RecentBlogsComponent } from "../../../../shared/components/recent-blogs/recent-blogs.component";
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { HeroSectionComponent } from '../../hero-section/hero-section.component';

@Component({
  selector: 'app-single-blog-layout',
  imports: [HeroSectionComponent, SingleBlogComponent, RecentBlogsComponent, HeaderComponent, FooterComponent],
  templateUrl: './single-blog-layout.component.html',
  styleUrl: './single-blog-layout.component.css'
})
export class SingleBlogLayoutComponent {

}
