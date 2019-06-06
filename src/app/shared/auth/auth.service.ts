import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../../entities/user';


@Injectable()
export class AuthService {
  user: User; 
  
  token: string;

  constructor() {}

  signupUser(email: string, password: string) {
    //your code for signing up the new user
  }

  signinUser(email: string, password: string) {
    //your code for checking credentials and getting tokens for for signing in user
  }

  logout() {   
    this.token = null;
  }

  getToken() {    
    return this.token;
  }

  isAuthenticated() {
    // here you can check if user is authenticated or not through his token 
    return true;
  }
  hasPermission(permission: string):boolean{
    
    
    let bContinue = false; 
    if(this.user){
      if(this.user.role){
        if(this.user.role.permissions){
          if(this.user.role.permissions.length > 0){
            bContinue = true;
          }
        }
      }
    }
    //Change it-->
    if(!bContinue) return true; 
    
    for(let per of this.user.role.permissions){
      if(per.nombre.toUpperCase() == permission.toUpperCase()){
        return true;
      }
    }
    return false; 
  }
}
