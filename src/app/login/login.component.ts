import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;

  constructor(private _router:Router, private _rest:RestService, private _state:StateService){
    this.loginform = new FormGroup({
      username : new FormControl('',[Validators.required,Validators.minLength(3)]),
      password : new FormControl('',[Validators.minLength(5),Validators.maxLength(20)])
    })
  }

   ngOnInit(): void {
  
    this.checktoken();
   }

   checktoken(){
    const token = localStorage.getItem('token');
    if (token) {
      this._state.token = token;
      this._state.decodeToken();
      this._router.navigate(['/mainpage']);
    }
   }

  Login(){
    this._rest.Login(this.loginform.value).subscribe((data:any)=>{
      console.log(data);
      localStorage.setItem('token',data.data);
      this._state.token = (data.data);
      this._state.decodeToken();
      this._router.navigate(['/mainpage']);
    }, err =>{
      console.log(err);
    })
  }

}
