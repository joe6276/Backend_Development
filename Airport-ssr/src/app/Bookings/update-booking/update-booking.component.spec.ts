import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookingComponent } from './update-booking.component';

describe('UpdateBookingComponent', () => {
  let component: UpdateBookingComponent;
  let fixture: ComponentFixture<UpdateBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UpdateBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
