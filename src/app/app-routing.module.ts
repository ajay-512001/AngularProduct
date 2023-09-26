import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstRoutingPageComponent } from './main/first-routing-page/first-routing-page.component';

// const appRoutes: Routes = [
  
//   { path: "", redirectTo: "/firstRoutingPageComponent", pathMatch: "full" },
//   { path: 'dashboard', component: FirstRoutingPageComponent },
//   {
//       path: 'firstRoutingPageComponent',
//       loadChildren: () => import('./main/first-routing-page/first-routing-page.module').then(m => m.FirstRoutingPageModule)
//   },
// ]

@NgModule({
  //imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
