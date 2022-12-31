import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http: HttpClient, private _state: StateService) { }

  url = "http://localhost:3000";

  Login(data: any) {
    return this._http.post(this.url + '/login', data);
  }

  getuser() {
    this._state.checkToken();
    const headers = new HttpHeaders({ 'token': this._state.token });
    return this._http.get(this.url + '/get_device', { headers });
  }

  dailyreports(data:any) {
    // this._state.checkToken();
    // const headers = new HttpHeaders({ 'token': this._state.token });
    return this._http.post(this.url + '/getdailyreports',data);
  }
}
