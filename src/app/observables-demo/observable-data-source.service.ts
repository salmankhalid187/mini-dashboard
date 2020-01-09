import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ObservableDataSourceService {

  private counter = 0;
  private subject: Subject<number> = new Subject<number>();
  private timerId: any = null;

  public incrementNumber(): void {
    this.counter ++;
    this.subject.next(this.counter);
  }

  public decrementNumber(): void {
    this.counter > 0 ? this.counter -- : this.subject.error(new Error('Number is already zero'));
    this.subject.next(this.counter);
  }

  public startAutoIncrement(): void {

    if (!this.timerId) {
      this.timerId = setInterval(() => {
      this.subject.next(++this.counter);
      }, 1000);
    }
  }

  public stopAutoIncrement(): void {
    clearInterval(this.timerId);
    this.timerId = null;
  }

  public getObservableNumnber(): Observable<number> {
    return this.subject.asObservable();
  }
}
