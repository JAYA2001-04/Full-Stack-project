import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  constructor(public loginService:AuthenticationService,private router:Router) { }
  ngOnInit() {
    
  }
  //this method is used for validation
  Feedback(){
    var status=confirm("Thanks for your feedback");
    if(status==true){
      this.router.navigate(['Restaurant'])
    }
    
  }


}
