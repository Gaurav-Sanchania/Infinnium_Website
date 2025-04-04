import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { BlogsListComponent } from '../../blogs-list/blogs-list.component';

@Component({
  selector: 'app-news-list-layout',
  imports: [HeaderComponent, HeroSectionComponent, BlogsListComponent, FooterComponent],
  templateUrl: './news-list-layout.component.html',
  styleUrl: './news-list-layout.component.css'
})
export class NewsListLayoutComponent {

}
