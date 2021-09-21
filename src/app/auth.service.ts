import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl="https://cloudbackend1.azurewebsites.net/api/register";

  private _loginUrl="https://cloudbackend1.azurewebsites.net/api/login";


  constructor(private http:HttpClient,private _router:Router) { }

  registerUser(user){
   return this.http.post<any>(this._registerUrl,user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl,user)
   }

   loggedIn(){
     return !!localStorage.getItem('token')
     
   }

   logoutUser(){
    console.log("inside logout")
     localStorage.removeItem('token')
     this._router.navigate(['/events'])
   }
   
   getToken(){
     return localStorage.getItem('token')
   }


}
