import { Component, OnInit } from '@angular/core';
import { PageAppearence, PageProperties } from '../page-properties';
import { ObservableDataSourceService } from './observable-data-source.service';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.scss']
})
export class ObservablesDemoComponent implements OnInit, PageAppearence {

  private currentValue: number = 0;

  constructor(private observableDataService: ObservableDataSourceService) { }

  ngOnInit() {
    this.observableDataService.getObservableNumnber().subscribe(
      (updatedValue: number) => this.currentValue = updatedValue,
      (err) => console.log(err)
    );
  }

  public onIncrementClick():void {
    this.observableDataService.incrementNumber();
  }

  public onDecrementClick():void {
    this.observableDataService.decrementNumber();
  }

  public getPageProperties(): PageProperties {
    return {
      isHeaderVisible: true,
      pageTitle: 'Demos list'
    }
  }

}
