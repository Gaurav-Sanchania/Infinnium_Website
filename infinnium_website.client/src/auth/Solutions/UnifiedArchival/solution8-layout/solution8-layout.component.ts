import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { TrustedLeadersComponent } from "../../../../shared/components/trusted-leaders/trusted-leaders.component";
import { RecentBlogsComponent } from "../../../../shared/components/recent-blogs/recent-blogs.component";
import { ExpertSectionComponent } from "../../../../shared/components/expert-section/expert-section.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { AboutComponent } from '../about/about.component';
import { FeaturesComponent } from '../features/features.component';

@Component({
  selector: 'app-solution8-layout',
  imports: [HeaderComponent, HeroSectionComponent, AboutComponent, FeaturesComponent,
    TrustedLeadersComponent, RecentBlogsComponent, ExpertSectionComponent, FooterComponent],
  templateUrl: './solution8-layout.component.html',
  styleUrl: './solution8-layout.component.css'
})
export class Solution8LayoutComponent {

}
