import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ExpertSectionComponent } from '../shared/components/expert-section/expert-section.component';
import { HeroSectionComponent } from '../components/hero-section/hero-section.component';
import { WhatWeDoComponent } from '../components/what-we-do/what-we-do.component';
import { AreaOfExpertiseComponent } from '../components/area-of-expertise/area-of-expertise.component';
import { OurProductsComponent } from '../components/our-products/our-products.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { GlobalImpactComponent } from '../components/global-impact/global-impact.component';
import { TrustedLeadersComponent } from '../components/trusted-leaders/trusted-leaders.component';
import { RecentBlogsComponent } from '../components/recent-blogs/recent-blogs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, FooterComponent, ExpertSectionComponent,
    HeroSectionComponent, WhatWeDoComponent, AreaOfExpertiseComponent,
    OurProductsComponent, AboutUsComponent, GlobalImpactComponent,
    TrustedLeadersComponent, RecentBlogsComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'infinnium_website.client';
}
