import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodedemoComponent } from './qrcodedemo.component';

describe('QrcodedemoComponent', () => {
  let component: QrcodedemoComponent;
  let fixture: ComponentFixture<QrcodedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
