import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDemoPageComponent } from './directive-demo-page/directive-demo-page.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [DirectiveDemoPageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: '', component: DirectiveDemoPageComponent }
    ])
  ]
})
export class DirectiveDemoModule { }
