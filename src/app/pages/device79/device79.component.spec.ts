import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Device79Component } from './device79.component';

describe('Device79Component', () => {
  let component: Device79Component;
  let fixture: ComponentFixture<Device79Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Device79Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Device79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
