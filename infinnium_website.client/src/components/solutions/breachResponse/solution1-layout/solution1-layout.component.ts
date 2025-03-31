import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { IntelligentComponent } from '../intelligent/intelligent.component';
import { FeaturesComponent } from '../features/features.component';
import { TrustedLeadersComponent } from '../../../../shared/components/trusted-leaders/trusted-leaders.component';
import { RecentBlogsComponent } from '../../../../shared/components/recent-blogs/recent-blogs.component';
import { ExpertSectionComponent } from '../../../../shared/components/expert-section/expert-section.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-solution1-layout',
  imports: [HeaderComponent, HeroSectionComponent, IntelligentComponent, FeaturesComponent,
    TrustedLeadersComponent, RecentBlogsComponent, ExpertSectionComponent, FooterComponent],
  templateUrl: './solution1-layout.component.html',
  styleUrl: './solution1-layout.component.css'
})
export class Solution1LayoutComponent {

}
