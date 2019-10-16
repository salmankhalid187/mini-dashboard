import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageAppearence, PageProperties } from '../page-properties';
import { ObservableDataSourceService } from './observable-data-source.service';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.scss']
})
export class ObservablesDemoComponent implements OnInit, OnDestroy, PageAppearence {

  private valueObserver: Observable<number>;
  private alive: boolean = true;

  constructor(private observableDataService: ObservableDataSourceService) { }

  ngOnInit() {
    this.valueObserver = this.observableDataService.getObservableNumnber();
    this.valueObserver.pipe(
      takeWhile(() => this.alive)
    );
  }

  ngOnDestroy() {
    this.alive = false;
    this.observableDataService.stopAutoIncrement();
  }

  public onIncrementClick():void {
    this.observableDataService.incrementNumber();
  }

  public onDecrementClick():void {
    this.observableDataService.decrementNumber();
  }

  public onAutoIncrement():void {
    this.observableDataService.startAutoIncrement();
  }

  public onStopAutoIncrement(): void {
    this.observableDataService.stopAutoIncrement();
  }
  

  public getPageProperties(): PageProperties {
    return {
      isHeaderVisible: true,
      pageTitle: 'Demos list'
    }
  }

}
