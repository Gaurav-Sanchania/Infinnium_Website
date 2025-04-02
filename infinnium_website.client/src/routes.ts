import { Routes } from "@angular/router";
import { AboutUsLayoutComponent } from "./auth/About Us/about-us-layout/about-us-layout.component";
import { ContactUsLayoutComponent } from "./auth/Contact Us/contact-us-layout/contact-us-layout.component";
import { HomeLayoutComponent } from "./auth/Home/home-layout/home-layout.component";
import { PartnerLayoutComponent } from "./auth/Partner/partner-layout/partner-layout.component";
import { ProductLayoutComponent } from "./auth/Product/4ig-Product/product-layout/product-layout.component";
import { Solution1LayoutComponent } from "./auth/Solutions/BreachResponse/solution1-layout/solution1-layout.component";
import { Product2LayoutComponent } from "./auth/Product/Breach Profiler/product2-layout/product2-layout.component";
import { Product3LayoutComponent } from "./auth/Product/Obscure PI/product3-layout/product3-layout.component";
import { Solution2LayoutComponent } from "./auth/Solutions/UIG/solution2-layout/solution2-layout.component";
import { Solution3LayoutComponent } from "./auth/Solutions/DSAR/solution3-layout/solution3-layout.component";
import { Solution4LayoutComponent } from "./auth/Solutions/eDiscovery/solution4-layout/solution4-layout.component";
import { Solution5LayoutComponent } from "./auth/Solutions/AutomatedRedaction/solution5-layout/solution5-layout.component";
import { Solution6LayoutComponent } from "./auth/Solutions/DataMapping/solution6-layout/solution6-layout.component";
import { Solution7LayoutComponent } from "./auth/Solutions/DataRetention/solution7-layout/solution7-layout.component";
import { Solution8LayoutComponent } from "./auth/Solutions/UnifiedArchival/solution8-layout/solution8-layout.component";
import { Solution9LayoutComponent } from "./auth/Solutions/DataDiposition/solution9-layout/solution9-layout.component";
import { Solution10LayoutComponent } from "./auth/Solutions/LegalHold/solution10-layout/solution10-layout.component";
import { BlogsListLayoutComponent } from "./auth/Resources/Blogs/blogs-list-layout/blogs-list-layout.component";
import { NewsListLayoutComponent } from "./auth/Resources/News/news-list-layout/news-list-layout.component";

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
      path: 'breach-profiler', component: Product2LayoutComponent
    },
    {
      path: 'obscure-pi', component: Product3LayoutComponent
    },
    {
      path: 'breach-response', component: Solution1LayoutComponent
    },
    {
      path: 'unified-information-governance', component: Solution2LayoutComponent
    },
    {
      path: 'data-protection', component: Solution3LayoutComponent
    },
    {
      path: 'eDiscovery', component: Solution4LayoutComponent
    },
    {
      path: 'automated-redaction', component: Solution5LayoutComponent
    },
    {
      path: 'data-mapping', component: Solution6LayoutComponent
    },
    {
      path: 'data-retention', component: Solution7LayoutComponent
    },
    {
      path: 'unified-archival', component: Solution8LayoutComponent
    },
    {
      path: 'data-disposition', component: Solution9LayoutComponent
    },
    {
      path: 'legal-hold', component: Solution10LayoutComponent
    },
    {
      path: 'partner', component: PartnerLayoutComponent
    },
    {
      path: 'blogs', component: BlogsListLayoutComponent
    },
    {
      path: 'news', component: NewsListLayoutComponent
    },
    {
      path: 'about-us', component: AboutUsLayoutComponent
    },
    {
      path: 'contact-us', component: ContactUsLayoutComponent
    }
  ];