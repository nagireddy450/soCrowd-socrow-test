import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEventsDashboardComponent } from './display-events-dashboard.component';

describe('DisplayEventsDashboardComponent', () => {
  let component: DisplayEventsDashboardComponent;
  let fixture: ComponentFixture<DisplayEventsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEventsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayEventsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
