import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";

@Component({
  standalone: true,
  selector: 'app-contact-us-layout',
  imports: [NavbarComponent, FooterComponent, ContactUsComponent],
  templateUrl: './contact-us-layout.component.html',
  styleUrl: './contact-us-layout.component.css'
})
export class ContactUsLayoutComponent {

}
