import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-dailyreport',
  templateUrl: './dailyreport.component.html',
  styleUrls: ['./dailyreport.component.css']
})
export class DailyreportComponent implements OnInit {

  r: any = [];
  dateForm:FormGroup;
  // @Input() fromtime = new Date(new Date().setDate(1)).toISOString().split('T')[0];
  // @Input() totime = new Date().toISOString().split('T')[0];
  @Input() fromtime:any;
  @Input() totime:any;
  // @Input() device_id :any;


  constructor(private _state: StateService, public _rest: RestService) { 
    this.dateForm=new FormGroup({
      fromtime:new FormControl('',Validators.required),
      totime:new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
    this.go();
  
  }

  go(){
    this._rest.dailyreports(this.dateForm.value)
    .subscribe((result:any) => {
      console.log(result);
      this.r = result.data;
    },(err)=>{
      console.log(err);
    })
  }
}
