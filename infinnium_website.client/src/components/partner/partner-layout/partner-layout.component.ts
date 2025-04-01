import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { ExpectationComponent } from "../expectation/expectation.component";
import { WeYouComponent } from "../we-you/we-you.component";
import { InsightsComponent } from "../insights/insights.component";
import { ExpertSectionComponent } from "../../../shared/components/expert-section/expert-section.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  standalone: true,
  selector: 'app-partner-layout',
  imports: [HeaderComponent, HeroSectionComponent, ExpectationComponent, WeYouComponent, InsightsComponent, ExpertSectionComponent, FooterComponent],
  templateUrl: './partner-layout.component.html',
  styleUrl: './partner-layout.component.css'
})
export class PartnerLayoutComponent {

}
