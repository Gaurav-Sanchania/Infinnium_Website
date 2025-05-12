import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ListComponent } from '../list/list.component';
import { AdvantagesComponent } from '../advantages/advantages.component';
import { FeaturesComponent } from '../features/features.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { TrustedLeadersComponent } from '../../../../shared/components/trusted-leaders/trusted-leaders.component';
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { ScrollToTopComponent } from "../../../../shared/components/scroll-top/scroll-to-top.component";
import { ScrollIndicatorComponent } from "../../../../shared/components/scroll-indicator/scroll-indicator.component";

@Component({
  standalone: true,
  selector: 'app-product-layout',
  imports: [
    ProductComponent,
    ListComponent,
    HeroSectionComponent,
    HeaderComponent,
    AdvantagesComponent,
    FeaturesComponent,
    FooterComponent,
    TrustedLeadersComponent,
    ScrollToTopComponent,
    ScrollIndicatorComponent
],
  templateUrl: './product-layout.component.html',
  styleUrl: './product-layout.component.css',
})
export class ProductLayoutComponent {}
