import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstRoutingPageComponent } from './first-routing-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes = [
  {
    path: '**',
    component: FirstRoutingPageComponent,
  }
];

@NgModule({
  declarations: [FirstRoutingPageComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class FirstRoutingPageModule { }
