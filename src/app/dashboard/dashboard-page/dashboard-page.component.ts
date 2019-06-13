import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { PayloadService } from 'src/app/services/payload.service';
import { PayloadItem } from 'src/app/models/payload-item';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  displayedColumns = ['id', 'type', 'links'];
  dataSource: PayloadItem[] = [];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private payloadService: PayloadService) { }
  ngOnInit() {

    this.payloadService.getData()
      .subscribe(payloadDto => {
        this.dataSource = payloadDto.data;
      });
  }

  applyFilter(filterValue: string) {
  }
}
