import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*Appcomponent is an head component for all subcomponet here we are giving
title for our project*/
export class AppComponent {
  title = 'Restaturant Management';
  constructor(public loginService:AuthenticationService,private router:Router) { }
  ngOnInit() {
    
  }
  //this method is used to confirm logout by user
  confirmLogout(){
    var status=confirm("Are you surely want to logged out");
    if(status==true){
      this.router.navigate(['logout'])
    }
    else{
      this.router.navigate(['review'])

    }
  }

}
