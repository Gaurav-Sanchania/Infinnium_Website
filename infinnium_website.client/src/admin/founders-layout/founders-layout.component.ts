import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { FoundersComponent } from "../founders/founders.component";

@Component({
  standalone: true,
  selector: 'app-founders-layout',
  imports: [NavbarComponent, FooterComponent, FoundersComponent],
  templateUrl: './founders-layout.component.html',
  styleUrl: './founders-layout.component.css'
})
export class FoundersLayoutComponent {

}
