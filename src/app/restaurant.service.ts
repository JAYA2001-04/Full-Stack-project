import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from './Restaurant';

@Injectable({
  providedIn: 'root'
})
//these methods are converting frontend to backend using BaseUrl in backend there is an crossOrgin and search for an respective mapping
export class RestaurantService {
  deleteAll() : Observable<any>{
    return this.httpClient.delete(`${this.baseURL}`);    ;
  }
  private baseURL = "http://localhost:8080/Swiggy/Restaurant";

  constructor(private httpClient: HttpClient) { }

  getRestaurantList(): Observable<Restaurant[]>{//observalbe is return type
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}`);
  }

  createRestaurant(restaurant: Restaurant): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, restaurant);
  }

  getRestaurantById(hotelId: number): Observable<Restaurant>{
    return this.httpClient.get<Restaurant>(`${this.baseURL}/${hotelId}`);
  }

  updateRestaurant(hotelId: number, restaurant: Restaurant): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${hotelId}`, restaurant);
  }

  //localhost:4200/delete/5
  deleteRestaurant(hotelId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${hotelId}`);
  }
  findByName(restaurantName:any): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}?restaurantName=${restaurantName}`);

  }
  findByVegRestaurant(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}/veg`);
  }
  findByNonVegRestaurant(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}/nonveg`);
  }





}


