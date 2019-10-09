import { Component, OnInit } from '@angular/core';
import { PageAppearence, PageProperties } from '../page-properties';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.scss']
})
export class ObservablesDemoComponent implements OnInit, PageAppearence {

  constructor() { }

  ngOnInit() {
  }

  public getPageProperties(): PageProperties {
    return {
      isHeaderVisible: true,
      pageTitle: 'Demos list'
    }
  }

}
