import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { TrustedLeadersComponent } from "../../../../shared/components/trusted-leaders/trusted-leaders.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { AboutComponent } from '../about/about.component';
import { FeaturesComponent } from '../features/features.component';

@Component({
  standalone: true,
  selector: 'app-solution4-layout',
  imports: [HeaderComponent, HeroSectionComponent, AboutComponent, FeaturesComponent,
    TrustedLeadersComponent, FooterComponent],
  templateUrl: './solution4-layout.component.html',
  styleUrl: './solution4-layout.component.css'
})
export class Solution4LayoutComponent {

}
