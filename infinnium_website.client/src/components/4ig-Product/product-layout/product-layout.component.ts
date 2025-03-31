import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ListComponent } from '../list/list.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { AdvantagesComponent } from '../advantages/advantages.component';
import { FeaturesComponent } from '../features/features.component';
import { ExpertSectionComponent } from '../../../shared/components/expert-section/expert-section.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { TrustedLeadersComponent } from '../../home/trusted-leaders/trusted-leaders.component';

@Component({
  standalone: true,
  selector: 'app-product-layout',
  imports: [ProductComponent, ListComponent, HeroSectionComponent, ExpertSectionComponent,
    HeaderComponent, AdvantagesComponent, FeaturesComponent, ExpertSectionComponent, FooterComponent,
    TrustedLeadersComponent],
  templateUrl: './product-layout.component.html',
  styleUrl: './product-layout.component.css'
})
export class ProductLayoutComponent {

}
