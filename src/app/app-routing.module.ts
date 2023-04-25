import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRestaurantComponent } from './Create-Restaurant/create-Restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { UpdateRestaurantdetailsComponent } from './update-restaurantdetails/update-restaurantdetails.component';
import { ViewRestaurantdetailsComponent } from './view-restaurantdetails/view-restaurantdetails.component';
import { LoginPageComponent } from './login-page/login-page.component'
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';
import { LogoutComponent } from './logout/logout.component';
import { ReviewComponent } from './review/review.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuardService } from './auth-guard.service';
/*these are the path for subcomponents and we are importing respective components*/
const routes: Routes = [
  {path: 'Restaurant', component: RestaurantListComponent,canActivate:[AuthGuardService]},
  {path: 'create-Restaurant', component: CreateRestaurantComponent,canActivate:[AuthGuardService]},
  {path: '', redirectTo: 'login-page', pathMatch: 'full'},//this path can be redirect to login page
  {path: 'update-Restaurant/:hotelId', component: UpdateRestaurantdetailsComponent,canActivate:[AuthGuardService]},
  {path: 'restaurant-details/:hotelId', component: ViewRestaurantdetailsComponent,canActivate:[AuthGuardService]},
  {path:'login-page', component: LoginPageComponent},
  {path:'registrationpage', component: RegistrationpageComponent},
  {path:'profilecard', component: ProfilecardComponent,canActivate:[AuthGuardService]},
  {path:'logout', component: LogoutComponent,canActivate:[AuthGuardService]},
  {path:'review',component:ReviewComponent,canActivate:[AuthGuardService]},
  {path:'aboutus',component:AboutusComponent,canActivate:[AuthGuardService]},
  {path:'contact-us',component:ContactUsComponent,canActivate:[AuthGuardService]},
  {path:'homepage',component:HomepageComponent,canActivate:[AuthGuardService]},
  





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
