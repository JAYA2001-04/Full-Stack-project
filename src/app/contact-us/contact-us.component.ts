import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  Name='';
  email='';
  message='';
  constructor(public loginService:AuthenticationService,private router:Router) { }
  ngOnInit() {
    
  }
  contact(){
      if(this.Name === '' || this.email === '' ||  this.message ===''){
        var status = confirm("It is mandatory to fill all the fields");
      }
      else{
    var status=confirm("Thanks for contact us we will reach you again");
    if(status==true){
      this.router.navigate(['Restaurant'])
    }
    
  }
  }
}
