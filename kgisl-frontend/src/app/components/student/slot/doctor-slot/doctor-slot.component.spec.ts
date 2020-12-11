import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DoctorSlotComponent } from './doctor-slot.component';

describe('DoctorSlotComponent', () => {
  let component: DoctorSlotComponent;
  let fixture: ComponentFixture<DoctorSlotComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
