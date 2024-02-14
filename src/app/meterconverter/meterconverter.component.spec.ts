import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterconverterComponent } from './meterconverter.component';

describe('MeterconverterComponent', () => {
  let component: MeterconverterComponent;
  let fixture: ComponentFixture<MeterconverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeterconverterComponent]
    });
    fixture = TestBed.createComponent(MeterconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
