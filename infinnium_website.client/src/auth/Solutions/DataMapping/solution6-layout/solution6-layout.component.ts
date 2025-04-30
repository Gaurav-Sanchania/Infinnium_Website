import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { TrustedLeadersComponent } from '../../../../shared/components/trusted-leaders/trusted-leaders.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { AboutComponent } from '../about/about.component';
import { FeaturesComponent } from '../features/features.component';

@Component({
  selector: 'app-solution6-layout',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    AboutComponent,
    FeaturesComponent,
    TrustedLeadersComponent,
    FooterComponent,
  ],
  templateUrl: './solution6-layout.component.html',
  styleUrl: './solution6-layout.component.css',
})
export class Solution6LayoutComponent {}
