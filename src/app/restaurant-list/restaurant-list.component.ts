import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../Restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit{

  restaurant: Restaurant[] = [];
  restaurantName: any;

/*here we are creating methods to view all the restaurant details like update ,delete ,view bry id,
restaurant name,ownername,foodtype, location,search ,veg or non veg and remove all*/

  constructor(private restaurantService: RestaurantService,
    private router: Router) { }


  ngOnInit(): void {
    this.getRestaurant();
  }

  private getRestaurant(){
    this.restaurantService.getRestaurantList().subscribe((data: Restaurant[]) => {
      this.restaurant = data;


    });
  }

  restaurantDetails(hotelId: number){
    console.log(hotelId);
    this.router.navigate(['restaurant-details', hotelId]);
    console.log("i came"+hotelId);
  }

  updateRestaurant(hotelId: number){
    this.router.navigate(['update-Restaurant', hotelId]);
  }

  deleteRestaurant(hotelId: number){
    this.restaurantService.deleteRestaurant(hotelId).subscribe( data => {
      console.log(data);
      this.getRestaurant();
    })
  }
  confirmDelete(restaurant: Restaurant){
    var status= confirm("Are you sure  you want to delete this record?");
     if (status==true) {
       this.deleteRestaurant(restaurant.hotelId);
          }
     else{
      this.getRestaurant();
     }
      
}
removeAllHotels():void{
  var status=confirm("your want to delete all record?");
  if(status==true){
  this.restaurantService.deleteAll().subscribe(
    data=>{
      console.log(data);
      this.getRestaurant();
    },
    error=>{
      console.log(error);
    });
  }else{
    this.getRestaurant();
  }
    }
    searchByName(){
      this.restaurantService.findByName(this.restaurantName).subscribe(
        data=>{
          this.restaurant=data;
          console.log(data);
        },
        error=>{
          console.log(error);
        });
      }
      fetchVegHotel(){
        this.restaurantService.findByVegRestaurant().subscribe(
          data => {
            this.restaurant = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });
      }
      fetchNonVegHotel(){
        this.restaurantService.findByNonVegRestaurant().subscribe(
          data => {
            this.restaurant = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });
      }
    }
    



