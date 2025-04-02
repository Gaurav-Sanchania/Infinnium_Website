import { Component } from '@angular/core';
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { SingleBlogComponent } from "../single-blog/single-blog.component";
import { ExpertSectionComponent } from '../../../../shared/components/expert-section/expert-section.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { RecentBlogsComponent } from '../../../Home/recent-blogs/recent-blogs.component';


@Component({
  standalone: true,
  selector: 'app-single-layout',
  imports: [HeaderComponent, HeroSectionComponent, SingleBlogComponent, 
    RecentBlogsComponent, ExpertSectionComponent, FooterComponent],
  templateUrl: './single-layout.component.html',
  styleUrl: './single-layout.component.css'
})
export class SingleLayoutComponent {

}
