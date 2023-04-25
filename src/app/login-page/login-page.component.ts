import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  username ='';
  password ='';
  invalidLogin = false

  constructor(private router:Router,
    private loginservice: AuthenticationService){ }

  ngOnInit() {
  }
  checklogin(){
    if(this.loginservice.authenticate(this.username, this.password))
    {
      this.router.navigate(['homepage']);
      console.log("navigate");
      this.invalidLogin = false;
      
    }
    else{
      this.invalidLogin=true;
      alert("Name and password is Invalid!");
    }
  }

  

}
