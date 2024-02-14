import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubractComponent } from './subract.component';

describe('SubractComponent', () => {
  let component: SubractComponent;
  let fixture: ComponentFixture<SubractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubractComponent]
    });
    fixture = TestBed.createComponent(SubractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
