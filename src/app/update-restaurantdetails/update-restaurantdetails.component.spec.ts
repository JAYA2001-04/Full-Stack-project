import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestaurantdetailsComponent } from './update-restaurantdetails.component';

describe('UpdateRestaurantdetailsComponent', () => {
  let component: UpdateRestaurantdetailsComponent;
  let fixture: ComponentFixture<UpdateRestaurantdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRestaurantdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRestaurantdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
