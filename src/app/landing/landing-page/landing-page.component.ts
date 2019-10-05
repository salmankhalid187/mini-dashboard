import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface IPuzzleTile {

  selectedTileIndex: number;
  puzzleLocation: number;
  isSelected: boolean;
}

interface DemoItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public demosList: DemoItem[] = [
    { title: 'Game page', link: './game-page'},
    { title: 'Qrcode page', link: './qrcode-demo'},
    { title: 'Dashboard', link: './dashboard'}
  ]

  ngOnInit() {

  }
}
