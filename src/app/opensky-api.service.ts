import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenskyApiService {

  private apiUrl = 'https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800';

  constructor(
    private http: HttpClient
  ) { }


  getFlights() {
    return this.http.get(this.apiUrl);
  }
  
}
