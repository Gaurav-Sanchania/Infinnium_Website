import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { FormComponent } from "../form/form.component";
import { ReachOutComponent } from "../reach-out/reach-out.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  standalone: true,
  selector: 'app-contact-us-layout',
  imports: [HeaderComponent, HeroSectionComponent, FormComponent, ReachOutComponent, FooterComponent],
  templateUrl: './contact-us-layout.component.html',
  styleUrl: './contact-us-layout.component.css'
})
export class ContactUsLayoutComponent {

}
