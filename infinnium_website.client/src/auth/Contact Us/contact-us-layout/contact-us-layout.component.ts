import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { FormComponent } from '../form/form.component';
import { ReachOutComponent } from '../reach-out/reach-out.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { ScrollToTopComponent } from "../../../shared/components/scroll-top/scroll-to-top.component";
import { ScrollIndicatorComponent } from "../../../shared/components/scroll-indicator/scroll-indicator.component";

@Component({
  standalone: true,
  selector: 'app-contact-us-layout',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    FormComponent,
    ReachOutComponent,
    FooterComponent,
    ScrollToTopComponent,
    ScrollIndicatorComponent
],
  templateUrl: './contact-us-layout.component.html',
  styleUrl: './contact-us-layout.component.css',
})
export class ContactUsLayoutComponent {}
