import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempcalcComponent } from './tempcalc.component';

describe('TempcalcComponent', () => {
  let component: TempcalcComponent;
  let fixture: ComponentFixture<TempcalcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempcalcComponent]
    });
    fixture = TestBed.createComponent(TempcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
