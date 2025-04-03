import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { HeroSectionComponent } from "../../hero-section/hero-section.component";
import { ExpertSectionComponent } from "../../../../shared/components/expert-section/expert-section.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { MemberComponent } from "../member/member.component";

@Component({
  standalone: true,
  selector: 'app-member-layout',
  imports: [HeaderComponent, HeroSectionComponent, ExpertSectionComponent, FooterComponent, MemberComponent],
  templateUrl: './member-layout.component.html',
  styleUrl: './member-layout.component.css'
})
export class MemberLayoutComponent {

}
