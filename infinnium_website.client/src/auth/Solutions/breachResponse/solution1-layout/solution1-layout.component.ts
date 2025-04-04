import { Component } from '@angular/core';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { TrustedLeadersComponent } from '../../../../shared/components/trusted-leaders/trusted-leaders.component';

import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { IntelligentComponent } from '../intelligent/intelligent.component';
import { FeaturesComponent } from '../features/features.component';

@Component({
  standalone: true,
  selector: 'app-solution1-layout',
  imports: [HeaderComponent, HeroSectionComponent, IntelligentComponent, FeaturesComponent,
    TrustedLeadersComponent, FooterComponent],
  templateUrl: './solution1-layout.component.html',
  styleUrl: './solution1-layout.component.css'
})
export class Solution1LayoutComponent {

}
