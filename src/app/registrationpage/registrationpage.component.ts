import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.css']
})
export class RegistrationpageComponent implements OnInit{
  Name='';
  password='';
  email='';
  phonenumber='';
  constructor(public loginService:AuthenticationService,private router:Router) { }
  ngOnInit() {
    
  }
//this method is used to required for name,password,email,and phonenumber
  Register(){
    if(this.Name === '' || this.password === ''|| this.email === '' ||  this.phonenumber ===''){
      var status = confirm("It is mandatory to fill all the fields");
    }
    else{
    var status = confirm("Successfully Register");
    if(status==true){
      this.router.navigate(['login-page']);
    }
  }
  }
}
