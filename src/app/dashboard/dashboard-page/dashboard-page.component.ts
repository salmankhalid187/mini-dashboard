import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { PayloadService } from 'src/app/services/payload.service';
import { PayloadItem } from 'src/app/models/payload-item';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements  AfterViewInit {

  displayedColumns = ['id', 'name', 'image', 'links'];

  dataSource: MatTableDataSource<PayloadItem>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private payloadService: PayloadService) {}

  ngAfterViewInit() {

    this.payloadService.getData()
      .subscribe(payloadItems => {
        this.dataSource = new MatTableDataSource(payloadItems);
        this.dataSource.sort = this.sort;
        this.dataSource.filterPredicate = (data: PayloadItem, filter: string) => {
          return data.attributes.content.toLowerCase().includes(filter) || data.id.toLowerCase().includes(filter);
        };
      });
  }

  applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue;
  }
}
