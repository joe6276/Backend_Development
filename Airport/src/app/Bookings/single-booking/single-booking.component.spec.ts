import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookingComponent } from './single-booking.component';

describe('SingleBookingComponent', () => {
  let component: SingleBookingComponent;
  let fixture: ComponentFixture<SingleBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SingleBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
