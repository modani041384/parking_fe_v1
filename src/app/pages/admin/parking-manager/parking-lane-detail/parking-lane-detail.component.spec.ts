import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingLaneDetailComponent } from './parking-lane-detail.component';

describe('ParkingLaneDetailComponent', () => {
  let component: ParkingLaneDetailComponent;
  let fixture: ComponentFixture<ParkingLaneDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingLaneDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingLaneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
