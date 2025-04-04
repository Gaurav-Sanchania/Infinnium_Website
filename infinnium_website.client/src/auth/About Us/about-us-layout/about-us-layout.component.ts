import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { AboutUsComponent } from '../../../shared/components/about-us/about-us.component';
import { WhatWeDoComponent } from '../what-we-do/what-we-do.component';
import { AboutUsSectionComponent } from '../about-us-section/about-us-section.component';
import { TeamComponent } from '../team/team.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-about-us-layout',
  imports: [HeroSectionComponent, HeaderComponent, AboutUsComponent, WhatWeDoComponent,
    AboutUsSectionComponent, TeamComponent, FooterComponent],
  templateUrl: './about-us-layout.component.html',
  styleUrl: './about-us-layout.component.css'
})
export class AboutUsLayoutComponent {

}
