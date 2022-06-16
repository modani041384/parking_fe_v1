import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlottypeConfigComponent } from './slottype-config.component';

describe('SlottypeConfigComponent', () => {
  let component: SlottypeConfigComponent;
  let fixture: ComponentFixture<SlottypeConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlottypeConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlottypeConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
