import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../Restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-view-restaurantdetails',
  templateUrl: './view-restaurantdetails.component.html',
  styleUrls: ['./view-restaurantdetails.component.css']
})
//here we are implementing ngOnInit method for view by Id and it moves to getRestaurantBId
//ngOnInit method calls default constructor
export class ViewRestaurantdetailsComponent implements OnInit {
  hotelId: number = 0;
  restaurant: any = [];
  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService,private router:Router) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params['hotelId']);
    console.log("view by id");
    this.hotelId = this.route.snapshot.params['hotelId'];

    this.restaurant = new Restaurant();
    this.restaurantService.getRestaurantById(this.hotelId).subscribe( (data: any) => {
      this.restaurant = data;
    });
  }
  View(){
    var status=confirm("click on ok go to Restaurant list");
    if(status==true){
      this.router.navigate(['Restaurant'])
    }
    
  }

}


