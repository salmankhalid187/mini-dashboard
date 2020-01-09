import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageAppearence, PageProperties } from '../../page-properties';

interface DemoItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements PageAppearence {

  public demosList: DemoItem[] = [
    { title: 'Game page', link: './game-page'},
    { title: 'Qrcode page', link: './qrcode-demo'},
    { title: 'Dashboard', link: './dashboard'},
    { title: 'Observables working', link: './observables-demo'}
  ];

  public getPageProperties(): PageProperties {
    return {
      isHeaderVisible: true,
      pageTitle: 'Demos list'
    };
  }
}
