import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { TrustedLeadersComponent } from "../../../../shared/components/trusted-leaders/trusted-leaders.component";
import { ExpertSectionComponent } from "../../../../shared/components/expert-section/expert-section.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { AboutComponent } from '../about/about.component';
import { FeaturesComponent } from '../features/features.component';

@Component({
  selector: 'app-solution7-layout',
  imports: [HeaderComponent, HeroSectionComponent, AboutComponent, FeaturesComponent,
    TrustedLeadersComponent, ExpertSectionComponent, FooterComponent],
  templateUrl: './solution7-layout.component.html',
  styleUrl: './solution7-layout.component.css'
})
export class Solution7LayoutComponent {

}
