import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export { routes as cookieRoute } from './cookie-routing.module';

export const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookieRoutingModule { }
