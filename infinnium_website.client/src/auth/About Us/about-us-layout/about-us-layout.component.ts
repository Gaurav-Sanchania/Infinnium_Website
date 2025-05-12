import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { WhatWeDoComponent } from '../what-we-do/what-we-do.component';
import { AboutUsSectionComponent } from '../about-us-section/about-us-section.component';
import { TeamComponent } from '../team/team.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { WhoWeAreComponent } from "../who-we-are/who-we-are.component";
import { ScrollToTopComponent } from "../../../shared/components/scroll-top/scroll-to-top.component";
import { ScrollIndicatorComponent } from "../../../shared/components/scroll-indicator/scroll-indicator.component";

@Component({
  standalone: true,
  selector: 'app-about-us-layout',
  imports: [
    HeroSectionComponent,
    HeaderComponent,
    WhatWeDoComponent,
    AboutUsSectionComponent,
    TeamComponent,
    FooterComponent,
    WhoWeAreComponent,
    ScrollToTopComponent,
    ScrollIndicatorComponent
],
  templateUrl: './about-us-layout.component.html',
  styleUrl: './about-us-layout.component.css',
})
export class AboutUsLayoutComponent {}
