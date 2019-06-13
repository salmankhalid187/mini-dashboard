import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { PayloadService } from 'src/app/services/payload.service';
import { PayloadItem } from 'src/app/models/payload-item';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  displayedColumns = [];

  columnNames = [{
    id: 'id',
    value: 'No.'

  }, {
    id: 'type',
    value: 'Name'
  },
  {
    id: 'links',
    value: 'Links'
  }];

  dataSource: PayloadItem[] = [];

  newDataSource: MatTableDataSource<PayloadItem>;

  constructor(private payloadService: PayloadService) { }
  ngOnInit() {

    this.newDataSource = new MatTableDataSource(this.dataSource);

    this.displayedColumns = this.columnNames.map(x => x.id);
    this.payloadService.getData()
      .subscribe(payloadDto => {
        this.dataSource = payloadDto.data;
      });
  }

  applyFilter(filterValue: string) {
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
