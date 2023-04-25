import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurantdetailsComponent } from './view-restaurantdetails.component';

describe('ViewRestaurantdetailsComponent', () => {
  let component: ViewRestaurantdetailsComponent;
  let fixture: ComponentFixture<ViewRestaurantdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRestaurantdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRestaurantdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
