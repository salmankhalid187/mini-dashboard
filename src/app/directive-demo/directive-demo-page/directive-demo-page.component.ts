import { Component } from '@angular/core';
import { PageAppearence, PageProperties } from '../../page-properties';

@Component({
  selector: 'app-directive-demo-page',
  templateUrl: './directive-demo-page.component.html',
  styleUrls: ['./directive-demo-page.component.scss']
})
export class DirectiveDemoPageComponent implements PageAppearence {

  customValue = 'This static text has been shown to show the usage of structural directive.';
  isShowDefaultValue = false;

  public toggle(event) {
    this.isShowDefaultValue = !this.isShowDefaultValue;
  }

  public getPageProperties(): PageProperties {
    return {
      isHeaderVisible: true,
      pageTitle: 'Directives demo'
    }
  }
}
