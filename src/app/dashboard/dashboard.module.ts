import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RouterModule } from '@angular/router';
import { DashboardBarComponent } from './dashboard-bar/dashboard-bar.component';
import { MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { PayloadService } from '../services/payload.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [DashboardPageComponent, DashboardBarComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: DashboardPageComponent }
    ])
  ],
  providers: [PayloadService]
})
export class DashboardModule { }
