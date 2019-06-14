import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PayloadItem } from '../models/payload-item';
import { map } from 'rxjs/operators';

@Injectable()
export class PayloadService {

  private serviceUrl = 'https://raw.githubusercontent.com/PerxTech/angular-interview/master/example.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<PayloadItem[]> {
    return this.http.get<any>(this.serviceUrl).pipe(
    map(model => {
      console.log(JSON.stringify(model));
      return model.data;
    })
  );
  }
}
