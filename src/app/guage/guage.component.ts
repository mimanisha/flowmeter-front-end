import { Component } from '@angular/core';

@Component({
  selector: 'app-guage',
  templateUrl: './guage.component.html',
  styleUrls: ['./guage.component.css']
})
export class GuageComponent {

  gaugeType:any = "semi";
  gaugeValue:number = Math.floor(Math.random() * 100);
  gaugeLabel:string = "Speed";
  gaugeAppendText:string = "Liters/Mintues";

  interval =setInterval(() => {
    this.gaugeValue = Math.round(Math.random() * 50)
  }, 3000)
}
