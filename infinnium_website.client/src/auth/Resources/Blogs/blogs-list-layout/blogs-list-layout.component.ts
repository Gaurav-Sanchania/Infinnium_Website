import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { BlogsListComponent } from '../../blogs-list/blogs-list.component';

@Component({
  selector: 'app-blogs-list-layout',
  imports: [HeaderComponent, HeroSectionComponent, BlogsListComponent, FooterComponent],
  templateUrl: './blogs-list-layout.component.html',
  styleUrl: './blogs-list-layout.component.css'
})
export class BlogsListLayoutComponent {

}
