import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { TrustedLeadersComponent } from '../../../../shared/components/trusted-leaders/trusted-leaders.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { AboutComponent } from '../about/about.component';
import { FeaturesComponent } from '../features/features.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ScrollToTopComponent } from "../../../../shared/components/scroll-top/scroll-to-top.component";
import { ScrollIndicatorComponent } from "../../../../shared/components/scroll-indicator/scroll-indicator.component";

@Component({
  standalone: true,
  selector: 'app-solution2-layout',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    AboutComponent,
    FeaturesComponent,
    TrustedLeadersComponent,
    FooterComponent,
    FormsModule,
    CommonModule,
    ScrollToTopComponent,
    ScrollIndicatorComponent
],
  templateUrl: './solution2-layout.component.html',
  styleUrl: './solution2-layout.component.css',
})
export class Solution2LayoutComponent {}
