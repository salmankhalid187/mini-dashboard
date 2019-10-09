import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ObservablesDemoComponent } from './observables-demo.component';

@NgModule({
  declarations: [ ObservablesDemoComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ObservablesDemoComponent }
    ])
  ]
})
export class ObservablesDemoModule { }
