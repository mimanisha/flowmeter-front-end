import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{

  user : any=[];

  constructor(private _state:StateService,private _rest:RestService){}

  ngOnInit(): void {
  
  }

  

}
