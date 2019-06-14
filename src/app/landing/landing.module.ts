import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forChild([
      { path: '', component: LandingPageComponent }
    ])
  ]
})
export class LandingModule { }
