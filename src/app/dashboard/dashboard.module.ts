import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RouterModule } from '@angular/router';
import { DashboardBarComponent } from './dashboard-bar/dashboard-bar.component';

@NgModule({
  declarations: [DashboardPageComponent, DashboardBarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DashboardPageComponent }
    ])
  ]
})
export class DashboardModule { }
