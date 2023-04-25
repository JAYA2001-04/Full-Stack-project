import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../Restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-update-restaurantdetails',
  templateUrl: './update-restaurantdetails.component.html',
  styleUrls: ['./update-restaurantdetails.component.css']
})
export class UpdateRestaurantdetailsComponent implements OnInit{
  hotelId: number = 0;
  restaurant:  Restaurant= new Restaurant();
  constructor(private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.hotelId = this.route.snapshot.params['hotelId'];

    this.restaurantService.getRestaurantById(this.hotelId).subscribe(data => {
      this.restaurant = data;
    }, error => console.log(error));
  }

//onSubmit method allows users to submit their name and address usging [(ngModel)](event binding)

  onSubmit(){
    this.restaurantService.updateRestaurant(this.hotelId, this.restaurant).subscribe(data =>{
     
      /*if(status==true){
        this.router.navigate(['Restaurant'])
      }*/
      this.goToRestaurantList();
    }
    , error => console.log(error));
  }

  goToRestaurantList(){
    alert("Updated Successfully")
    this.router.navigate(['/Restaurant']);
  }
}

