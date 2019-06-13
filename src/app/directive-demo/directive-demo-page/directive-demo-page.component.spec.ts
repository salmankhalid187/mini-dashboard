import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDemoPageComponent } from './directive-demo-page.component';

describe('DirectiveDemoPageComponent', () => {
  let component: DirectiveDemoPageComponent;
  let fixture: ComponentFixture<DirectiveDemoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveDemoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
