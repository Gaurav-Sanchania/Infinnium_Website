import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { WhatWeDoComponent } from '../what-we-do/what-we-do.component';
import { AreaOfExpertiseComponent } from '../area-of-expertise/area-of-expertise.component';
import { OurProductsComponent } from '../our-products/our-products.component';
import { AboutUsComponent } from '../../../shared/components/about-us/about-us.component';
import { GlobalImpactComponent } from '../global-impact/global-impact.component';
import { TrustedLeadersComponent } from '../../../shared/components/trusted-leaders/trusted-leaders.component';
import { RecentBlogsComponent } from '../../../shared/components/recent-blogs/recent-blogs.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { ScrollToTopComponent } from "../../../shared/components/scroll-top/scroll-to-top.component";
import { ScrollIndicatorComponent } from "../../../shared/components/scroll-indicator/scroll-indicator.component";

@Component({
  standalone: true,
  selector: 'app-home-layout',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    WhatWeDoComponent,
    AreaOfExpertiseComponent,
    OurProductsComponent,
    AboutUsComponent,
    GlobalImpactComponent,
    TrustedLeadersComponent,
    RecentBlogsComponent,
    FooterComponent,
    ScrollToTopComponent,
    ScrollIndicatorComponent
],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css',
})
export class HomeLayoutComponent {}
