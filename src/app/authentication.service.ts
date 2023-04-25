import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
//authentication Service is used to  check the current credential
  constructor() { }
  authenticate(username : any,password : any) {
    if(username === "Jayashree" && password === "Jaya@0123") {
      sessionStorage.setItem('username',username)
      return true;
    }

    else{
      return false;
    }
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem('username')
  }
}
