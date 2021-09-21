import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private _eventsUrl="https://cloudbackend1.azurewebsites.net/api/events";

  private _specialUrl="https://cloudbackend1.azurewebsites.net/api/special";

  constructor(private http:HttpClient) { }

  getEvents(){
    return this.http.get<any>(this._eventsUrl)
   }
 
   getSpecialUser(){
     return this.http.get<any>(this._specialUrl)
    }
}
