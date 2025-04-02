import { Routes } from "@angular/router";
import { AboutUsLayoutComponent } from "./auth/About Us/about-us-layout/about-us-layout.component";
import { ContactUsLayoutComponent } from "./auth/Contact Us/contact-us-layout/contact-us-layout.component";
import { HomeLayoutComponent } from "./auth/Home/home-layout/home-layout.component";
import { PartnerLayoutComponent } from "./auth/Partner/partner-layout/partner-layout.component";
import { ProductLayoutComponent } from "./auth/Product/4ig-Product/product-layout/product-layout.component";
import { CommonLayoutComponent } from "./auth/Resources/blogs and news/common-layout/common-layout.component";
import { Solution1LayoutComponent } from "./auth/Solutions/solution1-layout/solution1-layout.component";

export const routes: Routes = [
    {
      path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
      path: 'home', component: HomeLayoutComponent,
    },
    {
      path: 'product-4ig', component: ProductLayoutComponent
    },
    {
      path: 'breach-response', component: Solution1LayoutComponent
    },
    {
      path: 'partner', component: PartnerLayoutComponent
    },
    {
      path: 'blogs', component: CommonLayoutComponent
    },
    {
      path: 'about-us', component: AboutUsLayoutComponent
    },
    {
      path: 'contact-us', component: ContactUsLayoutComponent
    }
  ];