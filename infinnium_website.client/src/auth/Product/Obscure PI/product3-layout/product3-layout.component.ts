import { Component } from '@angular/core';
import { ExpertSectionComponent } from '../../../../shared/components/expert-section/expert-section.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { TrustedLeadersComponent } from '../../../../shared/components/trusted-leaders/trusted-leaders.component';
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { AdvantagesComponent } from '../advantages/advantages.component';
import { FeaturesComponent } from '../features/features.component';
import { ListComponent } from '../list/list.component';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product3-layout',
  imports: [HeaderComponent, HeroSectionComponent, ProductComponent, ListComponent, AdvantagesComponent, FeaturesComponent, TrustedLeadersComponent, ExpertSectionComponent, FooterComponent],
  templateUrl: './product3-layout.component.html',
  styleUrl: './product3-layout.component.css'
})
export class Product3LayoutComponent {

}
