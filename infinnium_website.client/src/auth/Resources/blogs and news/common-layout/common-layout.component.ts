import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { BlogsListComponent } from '../../../../shared/components/blogs-list/blogs-list.component';
import { ExpertSectionComponent } from '../../../../shared/components/expert-section/expert-section.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
  standalone: true,
  selector: 'app-common-layout',
  imports: [HeaderComponent, HeroSectionComponent, BlogsListComponent, ExpertSectionComponent, FooterComponent],
  templateUrl: './common-layout.component.html',
  styleUrl: './common-layout.component.css'
})
export class CommonLayoutComponent {

}
