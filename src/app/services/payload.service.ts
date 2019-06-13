import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PayloadItem, PayloadDto } from '../models/payload-item';

@Injectable()
export class PayloadService {

  private serviceUrl = 'https://raw.githubusercontent.com/PerxTech/angular-interview/master/example.json';
  // private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getData(): Observable<PayloadItem[]> {
    return this.http.get<PayloadDto>(this.serviceUrl);
  }
}
