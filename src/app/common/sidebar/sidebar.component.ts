import { Component,OnInit  } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  devices: any [] =[];

constructor( private _rest:RestService, private _state:StateService,private _router:Router){}

ngOnInit(): void {
  
}
 
  getuser(){
    this._rest.getuser().subscribe((data:any)=>{
      console.log(data);
      this._state.report = (data as any).data;
      this.devices = data.data;
    },(err)=>{
      console.log(err);
    })
  }
  
  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
    // this._toastr.success('logged out successfully', 'thanks for visit!');
  }
}
