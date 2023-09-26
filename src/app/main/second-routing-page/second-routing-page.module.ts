import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondRoutingPageComponent } from './second-routing-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes = [
  {
    path: '**',
    component: SecondRoutingPageComponent,
  }
];

@NgModule({
  declarations: [SecondRoutingPageComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class SecondRoutingPageModule { }
