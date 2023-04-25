import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../Restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {

    restaurant: Restaurant = new Restaurant();
    constructor(private restaurantService: RestaurantService,
      private router: Router) { }
  
    ngOnInit(): void {
    }
  
    saveRestaurant(){
      
      this.restaurantService.createRestaurant(this.restaurant).subscribe( (data: any) =>{
        console.log(data);
        this.goToRestaurantList();
      },
        (      error: any) => console.log(error));
    }
  
    goToRestaurantList(){
      this.router.navigate(['/Restaurant']);
    }
  //onSubmit method allows users to submit their name and address usging [(ngModel)](event binding)

    onSubmit(){
      let success=confirm("Inserted Successfully");
      if(success==true){
      console.log(this.restaurant);
      this.saveRestaurant();
      this.router.navigate(['Restaurant'])
    }
  else{
    this.router.navigate(['create-Restaurant'])

  }}
}
