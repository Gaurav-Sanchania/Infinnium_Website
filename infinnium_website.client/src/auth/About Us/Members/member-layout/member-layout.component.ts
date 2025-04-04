import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { HeroSectionComponent } from "../../hero-section/hero-section.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { MemberComponent } from "../member/member.component";

@Component({
  standalone: true,
  selector: 'app-member-layout',
  imports: [HeaderComponent, HeroSectionComponent, FooterComponent, MemberComponent],
  templateUrl: './member-layout.component.html',
  styleUrl: './member-layout.component.css'
})
export class MemberLayoutComponent {

}
