import { Component, OnInit } from '@angular/core';
import { PageAppearence, PageProperties } from '../../page-properties';

@Component({
  selector: 'app-qrcodedemo',
  templateUrl: './qrcodedemo.component.html',
  styleUrls: ['./qrcodedemo.component.scss']
})
export class QrcodedemoComponent implements OnInit, PageAppearence {

  constructor() { }

  ngOnInit() {
  }

  public getPageProperties(): PageProperties {
    return {
      isHeaderVisible: true,
      pageTitle: 'Qr code demo'
    }
  }

}
