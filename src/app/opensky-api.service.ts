import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Flight{
  estDepartureAirport: string,
  lastSeen: Date,
  firstSeen: Date,
}

@Injectable({
  providedIn: 'root'
})
export class OpenskyApiService {

  private apiUrl = 'https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800';

  constructor(
    private http: HttpClient
  ) { }


  getFlights(): Observable<Flight> {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.get<Flight>(this.apiUrl , {headers});
  }
  
}
