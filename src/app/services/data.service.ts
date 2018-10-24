import { NgZone, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  //private API_PATH: string = environment.path.api.service;
  constructor(private http: HttpClient) {
  }



  /*******************************************************************************
   ****************************** ON LOAD ****************************************
   ******************************************************************************/
  onLoad(): Observable<any> {
    return this.http.get(`/service/onload?load`);
  }
  login(username:string, password:string): Observable<any> {
    return this.http.get(`/service/onload?load`);
  }

  getCity(): Observable<any> {
    return this.http.get("./../assets/data/data.json");
  }

}
