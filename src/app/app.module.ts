import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { ViewRestaurantdetailsComponent } from './view-restaurantdetails/view-restaurantdetails.component';
import { UpdateRestaurantdetailsComponent } from './update-restaurantdetails/update-restaurantdetails.component';
import { CreateRestaurantComponent } from './Create-Restaurant/create-Restaurant.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';
import { LogoutComponent } from './logout/logout.component';
import { ReviewComponent } from './review/review.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
//we are importing head component and the respective sub components
@NgModule({
  declarations: [
    AppComponent,
    CreateRestaurantComponent,
    RestaurantListComponent,
    ViewRestaurantdetailsComponent,
    UpdateRestaurantdetailsComponent,
    LoginPageComponent,
    RegistrationpageComponent,
    ProfilecardComponent,
    LogoutComponent,
    ReviewComponent,
    AboutusComponent,
    HomepageComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
