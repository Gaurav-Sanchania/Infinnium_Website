import { Component } from '@angular/core';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { TrustedLeadersComponent } from '../../../../shared/components/trusted-leaders/trusted-leaders.component';
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { AdvantagesComponent } from '../advantages/advantages.component';
import { FeaturesComponent } from '../features/features.component';
import { ListComponent } from '../list/list.component';
import { ProductComponent } from '../product/product.component';
import { ScrollIndicatorComponent } from "../../../../shared/components/scroll-indicator/scroll-indicator.component";
import { ScrollToTopComponent } from "../../../../shared/components/scroll-top/scroll-to-top.component";

@Component({
  standalone: true,
  selector: 'app-product2-layout',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    ProductComponent,
    ListComponent,
    AdvantagesComponent,
    FeaturesComponent,
    TrustedLeadersComponent,
    FooterComponent,
    ScrollIndicatorComponent,
    ScrollToTopComponent
],
  templateUrl: './product2-layout.component.html',
  styleUrl: './product2-layout.component.css',
})
export class Product2LayoutComponent {}
