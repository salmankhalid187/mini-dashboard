import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { 
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule
 } from '@angular/material';
 import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
 import { DashboardBarComponent } from './dashboard-bar/dashboard-bar.component';
 
@NgModule({
  declarations: [DashboardPageComponent, DashboardBarComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: DashboardPageComponent }
    ])
  ],
  providers: []
})
export class DashboardModule { }
