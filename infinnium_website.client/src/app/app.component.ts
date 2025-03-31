import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ExpertSectionComponent } from '../shared/components/expert-section/expert-section.component';
import { HeroSectionComponent } from '../components/home/hero-section/hero-section.component';
import { WhatWeDoComponent } from '../components/home/what-we-do/what-we-do.component';
import { AreaOfExpertiseComponent } from '../components/home/area-of-expertise/area-of-expertise.component';
import { OurProductsComponent } from '../components/home/our-products/our-products.component';
import { AboutUsComponent } from '../components/home/about-us/about-us.component';
import { GlobalImpactComponent } from '../components/home/global-impact/global-impact.component';
import { TrustedLeadersComponent } from '../components/home/trusted-leaders/trusted-leaders.component';
import { RecentBlogsComponent } from '../components/home/recent-blogs/recent-blogs.component';
import { ProductLayoutComponent } from '../components/4ig-Product/product-layout/product-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, FooterComponent, ExpertSectionComponent,
    HeroSectionComponent, WhatWeDoComponent, AreaOfExpertiseComponent,
    OurProductsComponent, AboutUsComponent, GlobalImpactComponent,
    TrustedLeadersComponent, RecentBlogsComponent, ProductLayoutComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
   title = 'infinnium_website.client';
}
