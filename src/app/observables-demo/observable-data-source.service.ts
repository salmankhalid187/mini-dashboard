import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ObservableDataSourceService {

  private counter: number = 0;
  private subject: Subject<number> = new Subject<number>();

  public incrementNumber(): void {
    this.counter ++;
    this.subject.next(this.counter);
  }

  public decrementNumber(): void {
    this.counter > 0 ? this.counter -- : this.subject.error(new Error('Number is already zero'));
    this.subject.next(this.counter);
  }
  
  public getObservableNumnber(): Observable<number> {
    return this.subject.asObservable();
  }
}
