import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

     constructor(){}

      options: google.maps.MapOptions = {
        center: {lat: 40, lng: -20},
        zoom: 4
      };
 

}
