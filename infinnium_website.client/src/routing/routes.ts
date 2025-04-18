import { Routes } from "@angular/router";
import { aboutUsRoutes } from "../auth/About Us/about-us-routing.module";
import { contactUsRoutes } from "../auth/Contact Us/contact-us-routing.module";
import { homeRoutingModule } from "../auth/Home/home-routing.module";
import { partnerRoutes } from "../auth/Partner/partner-routing.module";
import { productRoutingModule } from "../auth/Product/product-routing.module";
import { resourcesRoutes } from "../auth/Resources/resources-routing.module";
import { solutionRoutes } from "../auth/Solutions/solutions-routing.module";
import { adminRoutes } from "../admin/admin-routing.module";
import { policyRoutes } from "../auth/Privacy/privacy-routing.module";
import { termsRoutes } from "../auth/Terms of Use/terms-routing.module";
import { cookieRoute } from "../auth/Cookies/cookie-routing.module";

export const routes: Routes = [
    ...aboutUsRoutes,
    ...homeRoutingModule,
    ...productRoutingModule,
    ...solutionRoutes,
    ...partnerRoutes,
    ...resourcesRoutes,
    ...contactUsRoutes,
    ...adminRoutes,
    ...policyRoutes,
    ...termsRoutes,
  ...cookieRoute,

  // Wildcard
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
  ];
