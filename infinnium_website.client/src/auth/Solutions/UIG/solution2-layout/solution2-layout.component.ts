import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { TrustedLeadersComponent } from '../../../../shared/components/trusted-leaders/trusted-leaders.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { AboutComponent } from '../about/about.component';
import { FeaturesComponent } from '../features/features.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  ],
  templateUrl: './solution2-layout.component.html',
  styleUrl: './solution2-layout.component.css',
})
export class Solution2LayoutComponent {}
