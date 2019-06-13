import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo-page',
  templateUrl: './directive-demo-page.component.html',
  styleUrls: ['./directive-demo-page.component.scss']
})
export class DirectiveDemoPageComponent implements OnInit {

  customValue = 'Some custom text value';

  ngOnInit() {
  }

}
