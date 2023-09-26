import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FirstRoutingPageComponent } from './main/first-routing-page/first-routing-page.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: "", redirectTo: "/prodFirst", pathMatch: "full" },
  {
    path: 'prodFirst',
    loadChildren: () => import('./main/first-routing-page/first-routing-page.module').then(m => m.FirstRoutingPageModule)
  },
  {
    path: 'prodSecond',
    loadChildren: () => import('./main/second-routing-page/second-routing-page.module').then(m => m.SecondRoutingPageModule)
  },
]



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
