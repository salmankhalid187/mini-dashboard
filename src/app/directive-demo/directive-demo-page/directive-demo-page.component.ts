import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo-page',
  templateUrl: './directive-demo-page.component.html',
  styleUrls: ['./directive-demo-page.component.scss']
})
export class DirectiveDemoPageComponent {

  customValue = 'This static text has been shown to show the usage of structural directive.';
  isShowDefaultValue = false;

  public toggle(event) {
    this.isShowDefaultValue = !this.isShowDefaultValue;
  }

}
