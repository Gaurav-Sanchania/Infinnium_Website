import { Component } from '@angular/core';
import { ProductLayoutComponent } from '../components/4ig-Product/product-layout/product-layout.component';
import { Solution1LayoutComponent } from '../components/solutions/breachResponse/solution1-layout/solution1-layout.component';
import { HomeLayoutComponent } from '../components/home/home-layout/home-layout.component';
import { AboutUsLayoutComponent } from '../components/about us/about-us-layout/about-us-layout.component';
import { CommonLayoutComponent } from '../components/blogs and news/common-layout/common-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HomeLayoutComponent, ProductLayoutComponent, AboutUsLayoutComponent,
    Solution1LayoutComponent, CommonLayoutComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
   title = 'infinnium_website.client';
}
