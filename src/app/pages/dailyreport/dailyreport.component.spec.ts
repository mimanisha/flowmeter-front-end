import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyreportComponent } from './dailyreport.component';

describe('DailyreportComponent', () => {
  let component: DailyreportComponent;
  let fixture: ComponentFixture<DailyreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
