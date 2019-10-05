import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import { QrcodedemoComponent } from './qrcodedemo/qrcodedemo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    QrcodedemoComponent
  ],
  imports: [
    CommonModule,
    QRCodeModule,
    RouterModule.forChild([
      { path: '', component: QrcodedemoComponent}
    ])
  ]
})
export class QrcodeDemoModule { }
