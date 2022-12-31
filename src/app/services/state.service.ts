import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class StateService {
   
  token = '';
  user : any = undefined;

  report :any = undefined;

  constructor(private _router:Router) { }

  // getTokenFormLocalStorage(callback: any) {
  //   if (localStorage.getItem('token')) {
  //     this.token = localStorage.getItem('token') + '';
  //     this.user = jwt_decode(this.token);
  //     if (this.user.exp < Math.floor(new Date().getTime() / 1000)) {
  //       this.token = '';
  //       this.user = undefined;
  //       callback(false);
  //       localStorage.removeItem('token');
  //       this._router.navigate(['/login']);
  //     } else {
  //       callback(true);
  //     }

  //   } else {
  //     this.token = '';
  //     this.user = undefined;
  //     callback(false);
  //   }
  // }

  
  decodeToken() {
    this.report = jwt_decode(this.token);
    console.log(this.report);
  }

  checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.token = token;
      this.decodeToken();
    } else {
      this._router.navigate(['/login']);
    }
  }
}
