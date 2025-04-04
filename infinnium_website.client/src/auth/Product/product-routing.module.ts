import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductLayoutComponent } from './4ig-Product/product-layout/product-layout.component';
import { Product2LayoutComponent } from './Breach Profiler/product2-layout/product2-layout.component';
import { Product3LayoutComponent } from './Obscure PI/product3-layout/product3-layout.component';
export { routes as productRoutingModule } from './product-routing.module';

export const routes: Routes = [
  {
    path: 'Products',
    children: [
      { path: '4ig', component: ProductLayoutComponent },
      { path: 'breach-profiler', component: Product2LayoutComponent },
      { path: 'obscure-pi', component: Product3LayoutComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
