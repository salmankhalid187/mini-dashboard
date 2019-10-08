import { Component } from '@angular/core';
import { PageAppearence, PageProperties } from './page-properties';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mini-dashboard';
  public pageProperties: PageProperties = null;

  private 

  public onActivate(ref: any): void {
    const page = ref as PageAppearence;
    this.pageProperties = page.getPageProperties();
  }
}
