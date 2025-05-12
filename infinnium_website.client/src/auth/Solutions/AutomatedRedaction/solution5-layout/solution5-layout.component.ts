import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { TrustedLeadersComponent } from '../../../../shared/components/trusted-leaders/trusted-leaders.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { AboutComponent } from '../about/about.component';
import { ScrollIndicatorComponent } from "../../../../shared/components/scroll-indicator/scroll-indicator.component";
import { ScrollToTopComponent } from "../../../../shared/components/scroll-top/scroll-to-top.component";

@Component({
  standalone: true,
  selector: 'app-solution5-layout',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    AboutComponent,
    TrustedLeadersComponent,
    FooterComponent,
    ScrollIndicatorComponent,
    ScrollToTopComponent
],
  templateUrl: './solution5-layout.component.html',
  styleUrl: './solution5-layout.component.css',
})
export class Solution5LayoutComponent {}
